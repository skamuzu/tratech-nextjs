export type status = "draft" | "published"

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  totalLessons: number;
  status: status;
  image: string;
}
