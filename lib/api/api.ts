import createClient from "openapi-fetch";
import type { paths } from "@/types/api";
import { CourseCreate, LessonCreate, ModuleCreate, UserCreate } from "./types";
import axios from "axios";

const client = createClient<paths>({
  baseUrl: process.env.API_URL || "http://localhost:8000",
});

export async function getAdminDashboardData() {
  const { data, error } = await client.GET("/admin/dashboard");

  if (error) {
    console.error("Failed to fetch dashboard data:", error);
    throw new Error("Failed to fetch dashboard data");
  }
  return data;
}

export async function createModule(moduleData: ModuleCreate) {
  const { data, error } = await client.POST("/modules/", {
    body: {
      course_id: moduleData.course_id,
      title: moduleData.title,
      module_number: moduleData.module_number,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (error) {
    console.error("Failed to create module:", error);
    throw new Error("Failed to create module");
  }
  return data;
}

export async function getCourseModules(course_id: string) {
  const { data, error } = await client.GET("/courses/{course_id}/modules", {
    params: {
      path: {
        course_id: course_id,
      },
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (error) {
    console.error("Failed to fetch modules", error);
    throw new Error("Failed to fetch modules.");
  }
  return data;
}

export async function createLesson(lessonData: LessonCreate) {
  const { data, error } = await client.POST("/lessons/", {
    body: {
      title: lessonData.title,
      lesson_number: lessonData.lesson_number,
      content: lessonData.content,
      module_id: lessonData.module_id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (error) {
    console.error("Failed to create course", error);
    throw new Error("Failed to create course.");
  }
  return data;
}

interface InviteUserParams {
  emails: string[];
  role: "admin" | "student";
  redirect_url?: string;
  expires_in_days?: number;
}

export async function inviteUsersByEmail({
  emails,
  role,
  redirect_url = `${
    process.env.FRONTEND_URL || "http://localhost:3000"
  }/sign-up`,
  expires_in_days = 7,
}: InviteUserParams) {
  const invites = emails.map((email) => ({
    email_address: email,
    public_metadata: { role },
    redirect_url,
    expires_in_days,
    notify: true,
    ignore_existing: true,
  }));

  const { data, error } = await client.POST("/users/email_invite", {
    body: invites,
  });

  if (error) {
    console.error("Failed to invite users:", error);
    throw new Error("Failed to send invitations");
  }

  return data;
}

export async function courseCreate(
  data: CourseCreate & { image?: File },
  onProgress: (percent: number) => void
) {
  const formData = new FormData();

  formData.append("title", data.title);
  if (data.subtitle) formData.append("subtitle", data.subtitle);
  formData.append("status", data.status);

  if (data.image) {
    formData.append("image", data.image);
  }

  const res = await axios.post(
    `${process.env.API_URL || "http://localhost:8000"}/courses`,
    formData,
    {
      onUploadProgress: (event) => {
        if (!event.total) return;
        const percent = Math.round((event.loaded * 100) / event.total);
        onProgress(percent);
      },
    }
  );

  return res.data;
}

export async function getCoursesAsFile() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/courses/excel/download`,
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to download courses");
  }

return response;
}
