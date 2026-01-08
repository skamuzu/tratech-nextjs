import { Card, CardContent, CardHeader,CardTitle } from "@/components/ui/card";
import { BookOpen, Users2, GraduationCap, TrendingUp } from "lucide-react";
import { StatItem } from "@/types/types";
import { getAdminDashboardData } from "@/lib/api/api";


export default async function CourseStats() {
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
      title: "Total Courses",
      value: data.number_of_courses,
      color: "text-green-600 bg-green-50 dark:bg-green-950/30",
    },
    {
      icon: TrendingUp,
      title: "Published Courses",
      value: data.number_of_published_courses,
      color: "text-green-600 bg-green-50 dark:bg-green-950/30",
    },
    {
      icon: BookOpen,
      title: "Total Lessons",
      value: data.number_of_lessons,
      color: "text-purple-600 bg-purple-50 dark:bg-purple-950/30",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {List.map((item) => (
          <Card key={item.title} className="overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xl font-medium text-muted-foreground">
                {item.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${item.color}`}>
                <item.icon className="h-6 w-6" />
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
  );
}
