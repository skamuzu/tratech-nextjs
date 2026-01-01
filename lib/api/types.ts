import type { paths } from "@/types/api";

export type AdminDashboard = paths["/admin/dashboard"]["get"]["responses"]["200"]["content"]["application/json"];

export type CourseRead = paths["/courses/{course_id}"]["get"]["responses"]["200"]["content"]["application/json"];
export type CourseModuleRead = paths["/courses/{course_id}/modules"]["get"]["responses"]["200"]["content"]["application/json"]

export type ModuleCreate = paths["/modules/"]["post"]["requestBody"]["content"]["application/json"];

export type LessonCreate = paths["/lessons/"]["post"]["requestBody"]["content"]["application/json"]

