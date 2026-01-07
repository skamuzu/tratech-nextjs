import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Edit,
  Eye,
  LucideIcon,
  BookOpen,
  Layers,
  Users,
  TrendingUp,
  Plus,
} from "lucide-react";
import { getAdminDashboardData } from "@/lib/api/api";
import Image from "next/image";
import AddCourseDialog from "./dialogs/AddCourseDialog";

type Status = "published" | "draft";

const StatusColor: Record<Status, string> = {
  published:
    "border-green-600 text-green-600 bg-green-50 dark:bg-green-950/30 dark:border-green-500",
  draft:
    "border-amber-500 text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-400",
};

const StatusIcon: Record<Status, LucideIcon> = {
  published: TrendingUp,
  draft: Edit,
};

export default async function CourseGrid() {
  const { courses } = await getAdminDashboardData();
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
                className="group hover:shadow-lg transition-all duration-300 overflow-hidden border-2"
              >
                {/* Course Header with Image */}
                <div className="relative h-50 bg-gradient-to-br from-primary/10 via-primary/5 to-background overflow-hidden">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <GraduationCap className="h-16 w-16 text-primary/30" />
                    </div>
                  )}
                  
                  {/* Status Badge Overlay */}
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant="outline"
                      className={`${StatusColor[item.status]} text-xs font-semibold backdrop-blur-sm`}
                    >
                      <StatusIconComponent className="h-3 w-3 mr-1" />
                      {item.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-5 space-y-4">
                  {/* Title and Description */}
                  <div className="space-y-2">
                    <h3 className="font-bold text-xl leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Stats Row */}
                  <div className="flex items-center justify-around py-3 border-y">
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-500/10">
                        <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-lg font-bold">{item.total_modules}</span>
                      <span className="text-xs text-muted-foreground">Modules</span>
                    </div>
                    
                    <div className="h-12 w-px bg-border" />
                    
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-500/10">
                        <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                      </div>
                      <span className="text-lg font-bold">{item.total_lessons}</span>
                      <span className="text-xs text-muted-foreground">Lessons</span>
                    </div>
                    
                    <div className="h-12 w-px bg-border" />
                    
                    <div className="flex flex-col items-center gap-1">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-500/10">
                        <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                      </div>
                      <span className="text-lg font-bold">0</span>
                      <span className="text-xs text-muted-foreground">Students</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                    >
                      <Eye className="h-4 w-4 mr-1.5" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1"
                    >
                      <Edit className="h-4 w-4 mr-1.5" />
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
