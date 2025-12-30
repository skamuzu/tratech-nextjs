import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Edit,
  Eye,
  LucideIcon,
  MoreHorizontal,
  BookOpen,
  Layers,
  Calendar,
  Users,
  TrendingUp,
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { getAdminDashboardData } from "@/lib/api/admin";
import Image from "next/image";

const { courses } = await getAdminDashboardData();

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

export default function CourseGrid() {
  return (
    <section className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Course Portfolio</h2>
          <p className="text-muted-foreground">
            Manage curriculum structure, modules and lessons.
          </p>
        </div>
        <Button className="w-full sm:w-auto shadow-sm hover:shadow-md transition-shadow">
          <Plus className="h-4 w-4 mr-2" />
          Add New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((item) => {
          const StatusIconComponent = StatusIcon[item.status];
          return (
            <Card
              key={item.title}
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 overflow-hidden"
            >
              <CardHeader className="pb-4 space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="relative flex-shrink-0">
                      {item.image ? (
                        <div className="relative h-14 w-14 rounded-xl overflow-hidden border-2 border-border bg-muted group-hover:border-primary/50 transition-colors">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      ) : (
                        <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-border flex items-center justify-center group-hover:border-primary/50 group-hover:from-primary/30 group-hover:to-primary/10 transition-all">
                          <GraduationCap className="h-7 w-7 text-primary" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge
                          variant="outline"
                          className={`${StatusColor[item.status]} text-xs font-medium`}
                        >
                          <StatusIconComponent className="h-3 w-3 mr-1" />
                          {item.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {item.subtitle}
                </p>
              </CardHeader>

              <CardContent className="space-y-5">
                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-border transition-colors">
                    <div className="p-2 rounded-md bg-blue-500/10">
                      <Layers className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">
                        Modules
                      </span>
                      <span className="text-base font-bold">
                        {item.total_modules}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-border transition-colors">
                    <div className="p-2 rounded-md bg-green-500/10">
                      <BookOpen className="h-4 w-4 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">
                        Lessons
                      </span>
                      <span className="text-base font-bold">
                        {item.total_lessons}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-border transition-colors">
                    <div className="p-2 rounded-md bg-purple-500/10">
                      <Users className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">
                        Students
                      </span>
                      <span className="text-base font-bold">0</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-br from-muted/50 to-muted/30 border border-border/50 hover:border-border transition-colors">
                    <div className="p-2 rounded-md bg-orange-500/10">
                      <Calendar className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-muted-foreground font-medium">
                        Updated
                      </span>
                      <span className="text-xs font-semibold">2 days ago</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-muted/50"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-60" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

    </section>
  );
}
