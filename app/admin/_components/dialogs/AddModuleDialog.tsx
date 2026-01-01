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
import { createModule } from "@/lib/api/admin";
import { Button } from "@/components/ui/button";
import { useState } from "react";

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
    console.log("Form submitted with data:", data);
    
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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Module</DialogTitle>
          <DialogDescription>
            Create a new module for an existing course. Fill in the details
            below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="course">Select Course</FieldLabel>
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
                  <p className="text-sm text-red-500">
                    {form.formState.errors.course.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="title">Module Title</FieldLabel>
                <Input id="title" {...form.register("title")} />
                {form.formState.errors.title && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.title.message}
                  </p>
                )}
              </Field>
              <Field>
                <FieldLabel htmlFor="module_number">Module Number</FieldLabel>
                <Input
                  type="number"
                  id="module_number"
                  {...form.register("module_number", { valueAsNumber: true })}
                />
                {form.formState.errors.module_number && (
                  <p className="text-sm text-red-500">
                    {form.formState.errors.module_number.message}
                  </p>
                )}
              </Field>
              <Field orientation="horizontal">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </Field>
            </FieldGroup>
          </FieldSet>
        </form>
      </DialogContent>
    </Dialog>
  );
}
