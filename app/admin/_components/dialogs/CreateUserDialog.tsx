"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import z from "zod";
import { Field, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { UserPlus, Shield, User, Mail, X, ShieldAlert } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { inviteUsersByEmail } from "@/lib/api/api";
import { toast } from "sonner";

interface CreateUserDialogProps {
  children: React.ReactNode;
  courses?: any;
}

const formSchema = z.object({
  role: z.enum(["student", "admin"], "Please select a role"),
  emails: z.array(z.email()).min(1, "At least one email is required"),
});

export default function CreateUserDialog({ children }: CreateUserDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "student",
      emails: [],
    },
  });

  const [open, setOpen] = useState(false);
  const [currentEmail, setCurrentEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [emails, setEmails] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedRole = form.watch("role");

  const addEmail = () => {
    const trimmedEmail = currentEmail.trim();

    if (!trimmedEmail) {
      setEmailError("Please enter an email address");
      return;
    }

    const emailValidation = z.email().safeParse(trimmedEmail);
    if (!emailValidation.success) {
      setEmailError("Please enter a valid email address");
      return;
    }

    if (emails.includes(trimmedEmail)) {
      setEmailError("This email has already been added");
      return;
    }

    setEmails([...emails, trimmedEmail]);
    form.setValue("emails", [...emails, trimmedEmail]);
    setCurrentEmail("");
    setEmailError("");
  };

  const removeEmail = (emailToRemove: string) => {
    const updatedEmails = emails.filter((email) => email !== emailToRemove);
    setEmails(updatedEmails);
    form.setValue("emails", updatedEmails);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addEmail();
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      await inviteUsersByEmail({
        emails: data.emails,
        role: data.role,
      });

      toast.success(
        `Successfully sent ${data.emails.length} invitation${
          data.emails.length !== 1 ? "s" : ""
        }!`
      );
      form.reset();
      setEmails([]);
      setCurrentEmail("");
      setOpen(false);
    } catch (error) {
      console.error("Error inviting users:", error);
      toast.error("Failed to send invitations. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getRoleBadge = () => {
    if (selectedRole === "admin") {
      return (
        <Badge variant="default" className="gap-1 bg-blue-600">
          <Shield className="w-3 h-3" />
          Admin
        </Badge>
      );
    }
    return (
      <Badge variant="secondary" className="gap-1">
        <User className="w-3 h-3" />
        Student
      </Badge>
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center ring-2 ring-blue-500/20">
              <UserPlus className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <DialogTitle className="text-xl">Invite New Users</DialogTitle>
              <DialogDescription className="text-base">
                Send email invitations to students or administrators to join your platform
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FieldSet>
            <FieldGroup>
              {/* Role Selection */}
              <Field>
                <FieldLabel>User Role</FieldLabel>
                <Controller
                  name="role"
                  control={form.control}
                  render={({ field }) => (
                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select user role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="student">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>Student</span>
                          </div>
                        </SelectItem>
                        <SelectItem value="admin">
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4" />
                            <span>Administrator</span>
                          </div>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.role && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.role.message}
                  </p>
                )}
              </Field>

              {/* Role Preview Badge */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Inviting as:</span>
                {getRoleBadge()}
              </div>

              {/* Email Input */}
              <Field>
                <FieldLabel>Email Addresses</FieldLabel>
                <div className="flex gap-2">
                  <Input
                    value={currentEmail}
                    onChange={(e) => {
                      setCurrentEmail(e.target.value);
                      setEmailError("");
                    }}
                    onKeyPress={handleKeyPress}
                    type="email"
                    placeholder="Enter email address"
                  />
                  <Button type="button" onClick={addEmail} variant="outline">
                    Add
                  </Button>
                </div>
                {emailError && (
                  <p className="text-sm text-red-500 mt-1">{emailError}</p>
                )}
                {form.formState.errors.emails && (
                  <p className="text-sm text-red-500 mt-1">
                    {form.formState.errors.emails.message}
                  </p>
                )}
                <p className="text-xs text-muted-foreground mt-1">
                  Press Enter or click Add to add multiple emails
                </p>
              </Field>

              {/* Email List */}
              {emails.length > 0 && (
                <div className="space-y-2">
                  <FieldLabel>Added Emails ({emails.length})</FieldLabel>
                  <div className="border rounded-lg p-3 space-y-2 max-h-40 overflow-y-auto">
                    {emails.map((email) => (
                      <div
                        key={email}
                        className="flex items-center justify-between bg-muted p-2 rounded-md"
                      >
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm">{email}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeEmail(email)}
                          className="h-6 w-6 p-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </FieldGroup>
          </FieldSet>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                setOpen(false);
                setEmails([]);
                setCurrentEmail("");
                form.reset();
              }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="gap-2"
              disabled={emails.length === 0 || isSubmitting}
            >
              <UserPlus className="w-4 h-4" />
              {isSubmitting
                ? "Sending..."
                : `Send ${emails.length} Invitation${
                    emails.length !== 1 ? "s" : ""
                  }`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
