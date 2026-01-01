import createClient from "openapi-fetch";
import type { paths } from "@/types/api";
import { ModuleCreate } from "./types";

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
      module_number: moduleData.module_number ,
    },
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (error) {
    console.error("Failed to create module:", error);
    throw new Error("Failed to create module");
  }
  return data;
}
  