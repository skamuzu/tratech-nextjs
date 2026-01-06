"use client";

import { CourseRead } from "@/lib/api/types";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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
import { createModule } from "@/lib/api/api";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShieldAlert, BookOpen, Hash, FileText } from "lucide-react";

interface AddModuleDialogProps {
  children: React.ReactNode;
  courses: CourseRead[];
}

const formSchema = z.object({
  course: z.string().min(1, "Course is required"),
  title: z.string().min(1, "Title is required"),
  module_number: z.number().min(1, "Module number is required"),
});

export default function AddModuleDialog({
  children,
  courses,
}: AddModuleDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      module_number: 1,
      course: "",
    },
  });

  const [open, setOpen] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {

    try {
      await createModule({
        course_id: data.course,
        title: data.title,
        module_number: data.module_number,
      });

      toast.success("Module created successfully!");
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Error creating module:", error);
      toast.error("Failed to create module.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="outline-0">{children}</DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center ring-2 ring-purple-500/20">
              <BookOpen className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <DialogTitle className="text-xl">Create New Module</DialogTitle>
              <DialogDescription className="text-base">
                Add a new learning module to organize lessons within a course
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="course" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  Select Course
                </FieldLabel>
                <Controller
                  name="course"
                  control={form.control}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map((course) => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {form.formState.errors.course && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <ShieldAlert className="h-4 w-4" />
                    {form.formState.errors.course.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="title" className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  Module Title
                </FieldLabel>
                <Input id="title" placeholder="Enter module title" {...form.register("title")} />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <ShieldAlert className="h-4 w-4" />
                    {form.formState.errors.title.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="module_number" className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-muted-foreground" />
                  Module Number
                </FieldLabel>
                <Input
                  type="number"
                  id="module_number"
                  placeholder="Enter module number"
                  {...form.register("module_number", { valueAsNumber: true })}
                />
                {form.formState.errors.module_number && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <ShieldAlert className="h-4 w-4" />
                    {form.formState.errors.module_number.message}
                  </p>
                )}
              </Field>
              <div className="flex justify-end gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setOpen(false);
                    form.reset();
                  }}
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={form.formState.isSubmitting} className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  {form.formState.isSubmitting ? "Creating Module..." : "Create Module"}
                </Button>
              </div>
            </FieldGroup>
          </FieldSet>
        </form>
      </DialogContent>
    </Dialog>
  );
}
