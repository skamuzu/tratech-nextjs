import type { paths } from "@/types/api";

export type AdminDashboard = paths["/admin/dashboard"]["get"]["responses"]["200"]["content"]["application/json"];

export type CourseRead = paths["/courses/{course_id}"]["get"]["responses"]["200"]["content"]["application/json"];