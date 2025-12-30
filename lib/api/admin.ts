import type { AdminDashboard } from "./types";

export async function getAdminDashboardData(): Promise<AdminDashboard> {
  const response = await fetch(`${process.env.API_URL}/admin/dashboard`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch admin dashboard data");
  }

  return response.json();
}