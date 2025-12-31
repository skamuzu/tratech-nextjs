"use client";

import { CourseRead } from "@/lib/api/types";
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";



import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogDescription,
} from "../ui/dialog";
import z from "zod";
import { FieldLabel, FieldSet } from "../ui/field";

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
    }
  });

  return (
    <Dialog>
      <DialogTrigger className="outline-0">{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Module</DialogTitle>
          <DialogDescription>
            Create a new module for an existing course. Fill in the details
            below.
          </DialogDescription>
        </DialogHeader>
        <form>
        
        </form>
      </DialogContent>
    </Dialog>
  );
}
