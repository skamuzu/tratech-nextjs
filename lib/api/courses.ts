import { Course } from "@/types/course";

export default async function getAllCourses(): Promise<Course[]> {
  const res = await fetch(`${process.env.API_URL}/courses`);
  if (!res.ok) throw new Error("Failed");
  const data: Course[] = await res.json();
  return data;
}
