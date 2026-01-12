import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowLeft,
  Edit,
  Trash2,
  Plus,
  BookOpen,
  Layers,
  Users,
  Clock,
  TrendingUp,
  Video,
  FileText,
  CheckCircle2,
  Circle,
  PlayCircle,
  Download,
  Share2,
  MoreVertical,
  Calendar,
  Target,
  Award,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CourseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock data for appearance
  const course = {
    id: params.id,
    title: "Introduction to Web Development",
    description:
      "Master the fundamentals of web development with HTML, CSS, and JavaScript. Build responsive websites and learn modern development practices.",
    image: "/placeholder-course.jpg",
    status: "published" as const,
    instructor: "Dr. Jane Smith",
    duration: "12 weeks",
    level: "Beginner",
    enrolled: 245,
    rating: 4.8,
    totalModules: 8,
    totalLessons: 45,
    completionRate: 68,
    lastUpdated: "2 days ago",
  };

  const modules = [
    {
      id: "1",
      title: "Getting Started with HTML",
      description: "Learn the basics of HTML structure and semantic markup",
      lessons: 6,
      duration: "2.5 hours",
      completed: 6,
      status: "completed" as const,
    },
    {
      id: "2",
      title: "CSS Fundamentals",
      description: "Style your web pages with modern CSS techniques",
      lessons: 8,
      duration: "3.5 hours",
      completed: 5,
      status: "in-progress" as const,
    },
    {
      id: "3",
      title: "JavaScript Basics",
      description: "Introduction to programming with JavaScript",
      lessons: 10,
      duration: "4 hours",
      completed: 0,
      status: "locked" as const,
    },
    {
      id: "4",
      title: "Responsive Design",
      description: "Create layouts that work on all devices",
      lessons: 7,
      duration: "3 hours",
      completed: 0,
      status: "locked" as const,
    },
  ];

  const recentActivity = [
    {
      type: "enrollment",
      message: "15 new students enrolled",
      time: "2 hours ago",
    },
    {
      type: "completion",
      message: "8 students completed Module 2",
      time: "5 hours ago",
    },
    {
      type: "update",
      message: "Course content updated",
      time: "2 days ago",
    },
  ];

  const stats = [
    {
      label: "Total Enrolled",
      value: course.enrolled,
      icon: Users,
      change: "+12%",
      positive: true,
    },
    {
      label: "Completion Rate",
      value: `${course.completionRate}%`,
      icon: Target,
      change: "+5%",
      positive: true,
    },
    {
      label: "Average Rating",
      value: course.rating,
      icon: Award,
      change: "+0.2",
      positive: true,
    },
    {
      label: "Total Lessons",
      value: course.totalLessons,
      icon: BookOpen,
      change: "+3",
      positive: true,
    },
  ];

  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Back Button & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Link href="/admin/courses">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Button>
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="outline" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="sm" className="text-destructive">
            <Trash2 className="h-4 w-4 mr-2" />
            Delete
          </Button>
        </div>
      </div>

      {/* Course Header */}
      <Card className="overflow-hidden border-2">
        <div className="relative h-64 bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <div className="absolute inset-0 flex items-center justify-center">
            <BookOpen className="h-32 w-32 text-primary/30" />
          </div>
          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              variant="outline"
              className="border-green-600 text-green-600 bg-green-50 dark:bg-green-950/30 dark:border-green-500 backdrop-blur-sm"
            >
              <TrendingUp className="h-3 w-3 mr-1" />
              {course.status}
            </Badge>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {course.title}
              </h1>
              <p className="text-muted-foreground">{course.description}</p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>{course.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Layers className="h-4 w-4" />
                <span>{course.totalModules} Modules</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <span>{course.totalLessons} Lessons</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Updated {course.lastUpdated}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon;
          return (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p
                      className={`text-xs mt-1 ${
                        stat.positive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {stat.change} from last week
                    </p>
                  </div>
                  <div className="rounded-full bg-primary/10 p-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="modules" className="space-y-4">
        <TabsList>
          <TabsTrigger value="modules">Modules & Lessons</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        {/* Modules Tab */}
        <TabsContent value="modules" className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">Course Modules</h2>
              <p className="text-muted-foreground text-sm">
                Manage course structure and content
              </p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Module
            </Button>
          </div>

          <div className="space-y-4">
            {modules.map((module, index) => {
              const isCompleted = module.status === "completed";
              const isInProgress = module.status === "in-progress";
              const isLocked = module.status === "locked";

              return (
                <Card key={module.id} className="overflow-hidden">
                  <CardHeader className="bg-muted/50 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div
                          className={`rounded-full p-2 ${
                            isCompleted
                              ? "bg-green-100 dark:bg-green-950"
                              : isInProgress
                              ? "bg-blue-100 dark:bg-blue-950"
                              : "bg-gray-100 dark:bg-gray-800"
                          }`}
                        >
                          {isCompleted ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600" />
                          ) : isInProgress ? (
                            <PlayCircle className="h-5 w-5 text-blue-600" />
                          ) : (
                            <Circle className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold">
                              Module {index + 1}: {module.title}
                            </h3>
                            {isLocked && (
                              <Badge variant="outline" className="text-xs">
                                Locked
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {module.description}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right text-sm hidden sm:block">
                          <p className="text-muted-foreground">
                            {module.lessons} lessons
                          </p>
                          <p className="text-muted-foreground">
                            {module.duration}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-muted rounded-full h-2 w-32">
                          <div
                            className={`h-2 rounded-full ${
                              isCompleted
                                ? "bg-green-600"
                                : isInProgress
                                ? "bg-blue-600"
                                : "bg-gray-400"
                            }`}
                            style={{
                              width: `${
                                (module.completed / module.lessons) * 100
                              }%`,
                            }}
                          />
                        </div>
                        <span className="text-muted-foreground">
                          {module.completed}/{module.lessons} completed
                        </span>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Plus className="h-3 w-3 mr-1" />
                          Add Lesson
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="h-3 w-3 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Student Management</h3>
                <p className="text-muted-foreground">
                  Student enrollment and progress tracking will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Course Analytics</h3>
                <p className="text-muted-foreground">
                  Detailed analytics and performance metrics will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab */}
        <TabsContent value="settings" className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <div className="text-center py-12">
                <Edit className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Course Settings</h3>
                <p className="text-muted-foreground">
                  Course configuration and advanced settings will appear here
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-semibold">Recent Activity</h2>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0">
                <div className="rounded-full bg-primary/10 p-2">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{activity.message}</p>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
