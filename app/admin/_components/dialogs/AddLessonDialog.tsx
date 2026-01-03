"use client";

import { CourseRead, LessonCreate } from "@/lib/api/types";
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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useCourseModules } from "@/lib/queries/courses";
import { Textarea } from "@/components/ui/textarea";
import { ShieldAlert } from "lucide-react";
import { createLesson } from "@/lib/api/api";
import { da } from "zod/v4/locales";

interface AddLessonDialogProps {
  children: React.ReactNode;
  courses: CourseRead[];
}

const formSchema = z.object({
  course: z.string().min(1, "Course is required"),
  module: z.string().min(1, "Module is required"),
  lesson_number: z.number().min(1, "Module number is required"),
  title: z.string().min(1, "Title is required"),
  content: z.string().optional(),
});

export default function AddLessonDialog({
  children,
  courses,
}: AddLessonDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      course: "",
      lesson_number: 1,
      content: "",
      module: "",
    },
  });

  const [open, setOpen] = useState(false);
  const [course, setCourse] = useState("");
  const { data: modules } = useCourseModules(course);

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    try {
      await createLesson({
        title: data.title,
        module_id: data.module,
        content: data.content,
        lesson_number: data.lesson_number,
      });

      toast.success("Lesson created successfully!");
      form.reset();
      setOpen(false);
    } catch (error) {
      console.error("Error creating lesson:", error);
      toast.error("Failed to create lesson.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="outline-0">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Lesson</DialogTitle>
          <DialogDescription>
            Create a new lesson for an existing course by filling in the details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldSet>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="course">Select Course</FieldLabel>
                <Controller
                  name="course"
                  control={form.control}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        setCourse(value);
                        form.setValue("module", "");
                      }}
                      value={field.value}
                    >
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
                <Field>
                  <FieldLabel htmlFor="module">Select Module</FieldLabel>
                  <Controller
                    name="module"
                    control={form.control}
                    render={({ field }) => (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                        disabled={!modules || modules.length === 0}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder={
                            !course
                              ? "Select a course first"
                              : modules?.length === 0
                              ? "No modules available"
                              : "Select a module"
                          } />
                        </SelectTrigger>
                        <SelectContent>
                          {modules?.map((module) => (
                            <SelectItem key={module.id} value={module.id}>
                              {module.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {!course && (
                    <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                      Please select a course to see available modules
                    </p>
                  )}
                  {course && modules?.length === 0 && (
                    <p className="text-sm text-amber-600 flex items-center gap-1 mt-1">
                      <ShieldAlert className="h-4 w-4" />
                      No modules found for this course. Create a module first.
                    </p>
                  )}
                  {form.formState.errors.module && (
                    <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                      <ShieldAlert className="h-4 w-4" />
                      {form.formState.errors.module.message}
                    </p>
                  )}
                </Field>
                <Field>
                  <FieldLabel htmlFor="title">Lesson Title</FieldLabel>
                  <Input id="title" placeholder="Enter lesson title" {...form.register("title")}></Input>
                </Field>
              </Field>
              {form.formState.errors.title && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <ShieldAlert className="h-4 w-4" />
                  {form.formState.errors.title.message}
                </p>
              )}
              <Controller
                name="content"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="content">Lesson Content</FieldLabel>
                    <Textarea
                      {...field}
                      id="content"
                      placeholder="Enter lesson content (optional)"
                      aria-invalid={fieldState.invalid}
                    />
                  </Field>
                )}
              />
              {form.formState.errors.content && (
                <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                  <ShieldAlert className="h-4 w-4" />
                  {form.formState.errors.content.message}
                </p>
              )}
              <Field>
                <FieldLabel htmlFor="lesson_number">Lesson Number</FieldLabel>
                <Input
                  type="number"
                  id="lesson_number"
                  placeholder="Enter lesson number"
                  {...form.register("lesson_number", { valueAsNumber: true })}
                />
                {form.formState.errors.lesson_number && (
                  <p className="text-sm text-red-500 flex items-center gap-1 mt-1">
                    <ShieldAlert className="h-4 w-4" />
                    {form.formState.errors.lesson_number.message}
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
