"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import {
  GraduationCap,
  Edit,
  Eye,
  LucideIcon,
  BookOpen,
  Layers,
  Users,
  CheckCircle,
  Clock,
  Plus,
  AlertCircle,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import AddCourseDialog from "./dialogs/AddCourseDialog";
import { useAdminDashboard } from "@/lib/queries/courses";

type Status = "published" | "draft";

const StatusColor: Record<Status, string> = {
  published:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30 dark:text-emerald-400 dark:border-emerald-800",
  draft:
    "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950/30 dark:text-slate-400 dark:border-slate-800",
};

const StatusIcon: Record<Status, LucideIcon> = {
  published: CheckCircle,
  draft: Clock,
};

export default function CourseGrid() {
  const { data, isLoading, error } = useAdminDashboard();

  if (error) {
    return (
      <section className="flex flex-col space-y-6">
        <Card className="border-destructive">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-destructive/10 p-6 mb-4">
              <AlertCircle className="h-12 w-12 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Failed to load courses</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              There was an error loading the course data. Please try again.
            </p>
          </CardContent>
        </Card>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Course Portfolio</h2>
            <p className="text-muted-foreground">
              Manage curriculum structure, modules, and lessons
            </p>
          </div>
          <AddCourseDialog>
            <Button className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
              <Plus className="h-4 w-4 mr-2" />
              Add New Course
            </Button>
          </AddCourseDialog>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="overflow-hidden">
              <CardHeader className="space-y-3 pb-4">
                <div className="flex items-start gap-3">
                  <Skeleton className="h-16 w-16 rounded-lg flex-shrink-0" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </CardHeader>
              <CardContent className="pt-4 border-t">
                <div className="flex items-center justify-between mb-4">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="flex flex-col items-center">
                      <Skeleton className="h-6 w-12 mb-1" />
                      <Skeleton className="h-3 w-14" />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-9 flex-1" />
                  <Skeleton className="h-9 flex-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  const courses = data?.courses ?? [];

  return (
    <section className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Course Portfolio</h2>
          <p className="text-muted-foreground">
            Manage curriculum structure, modules, and lessons
          </p>
        </div>
        <AddCourseDialog>
          <Button className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
            <Plus className="h-4 w-4 mr-2" />
            Add New Course
          </Button>
        </AddCourseDialog>
      </div>

      {courses.length === 0 ? (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-16 text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <GraduationCap className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No courses yet</h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Get started by creating your first course to build your curriculum
              structure.
            </p>
            <AddCourseDialog>
              <Button className="shadow-sm hover:shadow-md transition-shadow">
                <Plus className="h-4 w-4 mr-2" />
                Create Your First Course
              </Button>
            </AddCourseDialog>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {courses.map((item) => {
            const StatusIconComponent = StatusIcon[item.status];
            return (
              <Card
                key={item.title}
                className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
              >
                <CardHeader className="space-y-3 pb-4">
                  {/* Course Header */}
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      {item.image ? (
                        <div className="relative h-16 w-16 rounded-lg overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-primary/10 via-primary/5 to-background flex items-center justify-center ring-2 ring-border group-hover:ring-primary/50 transition-all">
                          <GraduationCap className="h-8 w-8 text-primary" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0 space-y-2">
                      <div>
                        <h3 className="font-bold text-base leading-tight line-clamp-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`${StatusColor[item.status]} text-xs font-medium mt-1.5 px-2 py-0.5`}
                        >
                          <StatusIconComponent className="h-3 w-3 mr-1" />
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Course Description */}
                  {item.subtitle && (
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.5rem]">
                      {item.subtitle}
                    </p>
                  )}
                </CardHeader>

                {/* Stats Section */}
                <CardContent className="pt-4 space-y-4 border-t bg-muted/20">
                  <div className="flex items-center justify-around">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="p-1.5 rounded-md bg-blue-500/10">
                          <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="text-lg font-bold">{item.total_modules}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Modules
                      </span>
                    </div>

                    <div className="h-10 w-px bg-border" />

                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="p-1.5 rounded-md bg-green-500/10">
                          <BookOpen className="h-3.5 w-3.5 text-green-600 dark:text-green-400" />
                        </div>
                        <span className="text-lg font-bold">{item.total_lessons}</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Lessons
                      </span>
                    </div>

                    <div className="h-10 w-px bg-border" />

                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5 mb-1">
                        <div className="p-1.5 rounded-md bg-purple-500/10">
                          <Users className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <span className="text-lg font-bold">0</span>
                      </div>
                      <span className="text-xs text-muted-foreground font-medium">
                        Students
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 hover:bg-background"
                    >
                      <Eye className="h-3.5 w-3.5 mr-1.5" />
                      View
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1"
                    >
                      <Edit className="h-3.5 w-3.5 mr-1.5" />
                      Edit
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
