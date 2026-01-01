import createClient from "openapi-fetch";
import type { paths } from "@/types/api";
import { LessonCreate, ModuleCreate } from "./types";

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
  const {data, error} = await client.POST("/lessons/", {
    body: {
      title: lessonData.title,
      lesson_number: lessonData.lesson_number,
      content: lessonData.content,
      module_id: lessonData.module_id
    },
    headers: {
      "Content-Type": "application/json"
    }
  })
   if (error) {
    console.error("Failed to create course", error);
    throw new Error("Failed to create course.");
  }
  return data;
  
}