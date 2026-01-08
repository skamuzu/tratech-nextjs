import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  GraduationCap,
  Search,
  Filter,
  Plus,
  BookOpen,
  Layers,
  Users,
  Edit,
  Eye,
  Trash2,
  MoreVertical,
  TrendingUp,
  Grid3x3,
  List,
  Download,
  Upload,
} from "lucide-react";
import Image from "next/image";
import CourseStats from "../_components/CourseStats";
import CourseGrid from "../_components/CourseGrid";

// Mock data for draft
const mockCourses = [
  {
    id: "1",
    title: "Introduction to Web Development",
    subtitle: "Learn the fundamentals of HTML, CSS, and JavaScript",
    status: "published" as const,
    total_modules: 8,
    total_lessons: 45,
    students: 234,
    image: null,
  },
  {
    id: "2",
    title: "Advanced React Patterns",
    subtitle: "Master modern React patterns and best practices",
    status: "draft" as const,
    total_modules: 6,
    total_lessons: 32,
    students: 0,
    image: null,
  },
  {
    id: "3",
    title: "Python for Data Science",
    subtitle: "Data analysis and visualization with Python",
    status: "published" as const,
    total_modules: 10,
    total_lessons: 58,
    students: 412,
    image: null,
  },
  {
    id: "4",
    title: "Mobile App Development with React Native",
    subtitle: "Build cross-platform mobile applications",
    status: "draft" as const,
    total_modules: 7,
    total_lessons: 38,
    students: 0,
    image: null,
  },
  {
    id: "5",
    title: "Database Design & SQL",
    subtitle: "Master relational database design and SQL queries",
    status: "published" as const,
    total_modules: 5,
    total_lessons: 28,
    students: 189,
    image: null,
  },
  {
    id: "6",
    title: "DevOps Fundamentals",
    subtitle: "CI/CD, Docker, Kubernetes, and cloud deployment",
    status: "published" as const,
    total_modules: 9,
    total_lessons: 52,
    students: 156,
    image: null,
  },
];

type Status = "published" | "draft";

const StatusColor: Record<Status, string> = {
  published:
    "border-green-600 text-green-600 bg-green-50 dark:bg-green-950/30 dark:border-green-500",
  draft:
    "border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400",
};

const StatusIcon: Record<Status, any> = {
  published: TrendingUp,
  draft: Edit,
};

export default function CoursesPage() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Header Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Courses</h1>
            <p className="text-muted-foreground mt-1">
              Manage all your courses, modules, and lessons
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Course
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <CourseStats />
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                className="pl-9"
              />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="newest">
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="students">Most Students</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex gap-1 border rounded-md p-1">
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <Grid3x3 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-7 w-7">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Courses Grid */}
     <CourseGrid/>
      {/* Pagination */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing <span className="font-medium">1-6</span> of{" "}
              <span className="font-medium">6</span> courses
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm" disabled>
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
