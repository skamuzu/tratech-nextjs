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
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShieldAlert, BookOpen, Hash, FileText, Loader2, CheckCircle, Upload } from "lucide-react";
import FileUploader from "@/components/fileUploader";
import { courseCreate } from "@/lib/api/api";

export default function AddCourseDialog({
  children,
}: {
  children: React.ReactNode;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

  const formSchema = z.object({
    title: z.string().min(1, "Title is required"),
    subtitle: z.string().optional(),
    status: z.enum(["draft", "published"]),

    image: z
      .instanceof(File)
      .optional()
      .refine(
        (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Only JPG, PNG, or WEBP images are allowed"
      )
      .refine(
        (file) => !file || file.size <= MAX_IMAGE_SIZE,
        "Image must be smaller than 5MB"
      ), 
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      subtitle: "",
      status: "draft" as const,
      image: undefined,
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true);
      setUploadProgress(0);

      const courseData = {
        title: data.title,
        subtitle: data.subtitle || "",
        status: data.status,
        image: file ?? undefined,
      } as Parameters<typeof courseCreate>[0];

      const result = await courseCreate(courseData, (percent) => {
        setUploadProgress(percent);
      });

      toast.success("Course created successfully!", {
        description: `${data.title} has been added to the system.`,
        icon: <CheckCircle className="h-4 w-4" />,
      });

      reset();
      setFile(null);
      setUploadProgress(0);
      setOpen(false);
    } catch (error) {
      console.error("Error creating course:", error);
      toast.error("Failed to create course", {
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Add New Course
          </DialogTitle>
          <DialogDescription>
            Create a new course to start adding modules and lessons.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldSet>
            <Field>
              <FieldLabel className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Course Title
              </FieldLabel>
              <Input
                placeholder="e.g. Introduction to Programming"
                {...register("title")}
                disabled={isLoading}
              />
              {errors.title && (
                <p className="text-sm text-red-500 mt-1">{errors.title.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel className="flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Course Description
              </FieldLabel>
              <Input
                placeholder="Brief description of the course"
                {...register("subtitle")}
                disabled={isLoading}
              />
              {errors.subtitle && (
                <p className="text-sm text-red-500 mt-1">{errors.subtitle.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Course Image
              </FieldLabel>
              <FileUploader
                file={file}
                setFile={setFile}
                disabled={isLoading}
              />
              {errors.image && (
                <p className="text-sm text-red-500 mt-1">{errors.image.message}</p>
              )}
            </Field>
            <Field>
              <FieldLabel className="flex items-center gap-2">
                <ShieldAlert className="h-4 w-4" />
                Status
              </FieldLabel>
              <Select
                defaultValue="draft"
                onValueChange={(value) => setValue("status", value as "draft" | "published")}
                disabled={isLoading}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                </SelectContent>
              </Select>
            </Field>
            {isLoading && uploadProgress > 0 && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Uploading...
                  </span>
                  <span className="font-medium">{uploadProgress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </FieldSet>
          <div className="mt-4 flex justify-end space-x-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isLoading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Create Course
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
