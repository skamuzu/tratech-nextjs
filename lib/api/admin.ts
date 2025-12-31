import createClient from "openapi-fetch";
import type { paths } from "@/types/api";

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
