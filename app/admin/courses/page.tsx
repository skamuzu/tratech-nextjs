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
import AddCourseDialog from "../_components/dialogs/AddCourseDialog";
import ExportCoursesButton from "./_components/ExportCoursesButton";

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
            <ExportCoursesButton />
            <AddCourseDialog>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Course
              </Button>
            </AddCourseDialog>
          </div>
        </div>

        {/* Stats Cards */}
        <CourseStats />
      </div>

      {/* Filters and Search */}

      {/* Courses Grid */}
      <CourseGrid />
      {/* Pagination */}
    </div>
  );
}
