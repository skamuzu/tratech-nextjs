import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users2,
  GraduationCap,
  BookOpen,
  TrendingUp,
  LucideIcon,
} from "lucide-react";
import { getAdminDashboardData } from "@/lib/api/admin";

interface StatItem {
  icon: LucideIcon;
  title: string;
  value: number;
  change?: string;
  trend?: "up" | "down";
  color: string;
}

const data = await getAdminDashboardData();

const List: StatItem[] = [
  {
    icon: Users2,
    title: "Active Users",
    value: data.number_of_users,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: GraduationCap,
    title: "Published Courses",
    value: data.number_of_courses,
    color: "text-green-600 bg-green-50 dark:bg-green-950/30",
  },
  {
    icon: BookOpen,
    title: "Total Lessons",
    value: data.number_of_lessons,
    color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30",
  },
];

export default function Stats() {
  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Overview</h2>
        <p className="text-muted-foreground">
          Quick Overview of Platform Statistics.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {List.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${item.color}`}>
                <item.icon className="h-4 w-4" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline justify-between">
                <div className="text-3xl font-bold">
                  {item.value.toLocaleString()}
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
