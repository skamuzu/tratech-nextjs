"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  GraduationCap,
  ArrowLeft,
  Edit,
  Trash2,
  Share2,
  Download,
  BookOpen,
  Layers,
  Users,
  Clock,
  CheckCircle,
  TrendingUp,
  Calendar,
  BarChart3,
  Eye,
  Target,
  Award,
  PlayCircle,
  FileText,
  Settings,
  ChevronRight,
  Plus,
  MoreVertical,
  Star,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();

  // Mock course data
  const course = {
    id: params.id,
    title: "Introduction to Web Development",
    subtitle: "Learn the fundamentals of HTML, CSS, and JavaScript to build modern websites",
    description:
      "This comprehensive course covers everything you need to know to start your journey as a web developer. From basic HTML structure to advanced JavaScript concepts, you'll gain hands-on experience building real-world projects.",
    image: null,
    status: "published",
    instructor: "John Doe",
    createdAt: "Dec 15, 2025",
    updatedAt: "Jan 2, 2026",
    duration: "24 hours",
    difficulty: "Beginner",
    rating: 4.8,
    reviews: 342,
    totalModules: 8,
    totalLessons: 45,
    totalStudents: 1247,
    completionRate: 78,
    averageProgress: 65,
  };

  const modules = [
    {
      id: 1,
      title: "Getting Started with HTML",
      lessons: 6,
      duration: "2h 30m",
      completed: 6,
      status: "completed",
    },
    {
      id: 2,
      title: "CSS Fundamentals",
      lessons: 8,
      duration: "3h 45m",
      completed: 8,
      status: "completed",
    },
    {
      id: 3,
      title: "JavaScript Basics",
      lessons: 10,
      duration: "4h 20m",
      completed: 7,
      status: "in-progress",
    },
    {
      id: 4,
      title: "DOM Manipulation",
      lessons: 7,
      duration: "3h 10m",
      completed: 0,
      status: "locked",
    },
    {
      id: 5,
      title: "Responsive Design",
      lessons: 6,
      duration: "2h 50m",
      completed: 0,
      status: "locked",
    },
    {
      id: 6,
      title: "Modern CSS Layouts",
      lessons: 5,
      duration: "2h 30m",
      completed: 0,
      status: "locked",
    },
  ];

  const recentStudents = [
    { id: 1, name: "Alice Johnson", progress: 85, enrolled: "2 days ago" },
    { id: 2, name: "Bob Smith", progress: 45, enrolled: "5 days ago" },
    { id: 3, name: "Carol White", progress: 100, enrolled: "1 week ago" },
    { id: 4, name: "David Brown", progress: 60, enrolled: "1 week ago" },
    { id: 5, name: "Emma Davis", progress: 30, enrolled: "2 weeks ago" },
  ];

  const analytics = [
    { label: "Avg. Completion Time", value: "18 days", change: "-2 days" },
    { label: "Student Satisfaction", value: "4.8/5", change: "+0.2" },
    { label: "Active Students", value: "892", change: "+124" },
    { label: "Completion Rate", value: "78%", change: "+5%" },
  ];

  const stats = [
    {
      label: "Total Modules",
      value: course.totalModules,
      icon: Layers,
      color: "text-blue-600",
      bg: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      label: "Total Lessons",
      value: course.totalLessons,
      icon: BookOpen,
      color: "text-green-600",
      bg: "bg-green-50 dark:bg-green-950/30",
    },
    {
      label: "Enrolled Students",
      value: course.totalStudents.toLocaleString(),
      icon: Users,
      color: "text-purple-600",
      bg: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      label: "Avg. Progress",
      value: `${course.averageProgress}%`,
      icon: TrendingUp,
      color: "text-orange-600",
      bg: "bg-orange-50 dark:bg-orange-950/30",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 mx-auto max-w-[1600px]">
      {/* Back Button and Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <Button
          variant="ghost"
          onClick={() => router.push("/admin/courses")}
          className="w-fit"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Button>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button variant="default" size="sm">
            <Edit className="h-4 w-4 mr-2" />
            Edit Course
          </Button>
          <Button variant="ghost" size="sm" className="text-destructive">
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Course Header */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Course Image */}
            <div className="flex-shrink-0">
              {course.image ? (
                <div className="relative h-48 w-full lg:w-64 rounded-lg overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="h-48 w-full lg:w-64 rounded-lg bg-gradient-to-br from-primary/20 via-primary/10 to-background flex items-center justify-center border-2 border-border">
                  <GraduationCap className="h-24 w-24 text-primary" />
                </div>
              )}
            </div>

            {/* Course Info */}
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <h1 className="text-3xl font-bold">{course.title}</h1>
                    <p className="text-lg text-muted-foreground">
                      {course.subtitle}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-sm px-3 py-1 ${
                      course.status === "published"
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30"
                        : "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950/30"
                    }`}
                  >
                    {course.status === "published" ? (
                      <CheckCircle className="h-4 w-4 mr-1" />
                    ) : (
                      <Clock className="h-4 w-4 mr-1" />
                    )}
                    {course.status.charAt(0).toUpperCase() + course.status.slice(1)}
                  </Badge>
                </div>
              </div>

              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>
                    <span className="font-medium">{course.instructor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-muted-foreground" />
                  <span>{course.difficulty}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span>
                    <span className="font-medium">{course.rating}</span> ({course.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                <div>Created: {course.createdAt}</div>
                <div>•</div>
                <div>Last updated: {course.updatedAt}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs Section */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="modules">Modules & Lessons</TabsTrigger>
          <TabsTrigger value="students">Students</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Course Description */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Course Description
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {course.description}
                </p>
                <Separator className="my-4" />
                <div className="space-y-3">
                  <h4 className="font-semibold">What you'll learn:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Build responsive websites using HTML, CSS, and JavaScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Understand modern web development best practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Create interactive user interfaces with JavaScript</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Deploy your projects to production</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Quick Analytics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {analytics.map((item, index) => (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-muted-foreground">
                          {item.label}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {item.change}
                        </Badge>
                      </div>
                      <p className="text-lg font-bold">{item.value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Module
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Lesson
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    Preview Course
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    View Discussions
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Modules Tab */}
        <TabsContent value="modules" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Course Curriculum</CardTitle>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Module
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {modules.map((module, index) => (
                <Card
                  key={module.id}
                  className="border-2 hover:border-primary/30 transition-colors"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 text-primary font-bold flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="font-semibold text-base">
                              {module.title}
                            </h3>
                            <Badge
                              variant="outline"
                              className={`${
                                module.status === "completed"
                                  ? "bg-green-50 text-green-700 border-green-200"
                                  : module.status === "in-progress"
                                  ? "bg-blue-50 text-blue-700 border-blue-200"
                                  : "bg-gray-50 text-gray-700 border-gray-200"
                              }`}
                            >
                              {module.status === "completed" && (
                                <CheckCircle className="h-3 w-3 mr-1" />
                              )}
                              {module.status === "in-progress" && (
                                <PlayCircle className="h-3 w-3 mr-1" />
                              )}
                              {module.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5" />
                              {module.lessons} lessons
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5" />
                              {module.duration}
                            </span>
                            <span>
                              {module.completed}/{module.lessons} completed
                            </span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                            <div
                              className="bg-primary h-2 rounded-full transition-all"
                              style={{
                                width: `${(module.completed / module.lessons) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Students Tab */}
        <TabsContent value="students" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Enrolled Students</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export List
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentStudents.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 rounded-lg border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center font-semibold">
                        {student.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Enrolled {student.enrolled}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{student.progress}%</p>
                        <div className="w-24 bg-muted rounded-full h-2 mt-1">
                          <div
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${student.progress}%` }}
                          />
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Course Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 flex items-center justify-center border-2 border-dashed rounded-lg">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>Analytics charts would be displayed here</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Engagement Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Video Watch Rate</span>
                    <span className="text-sm font-medium">87%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "87%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Quiz Completion</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: "92%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Discussion Activity</span>
                    <span className="text-sm font-medium">65%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-600 h-2 rounded-full" style={{ width: "65%" }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Top Performing Modules</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {modules.slice(0, 3).map((module, index) => (
                    <div key={module.id} className="flex items-center gap-3">
                      <div className="flex items-center justify-center h-8 w-8 rounded bg-primary/10 text-primary font-bold text-sm">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{module.title}</p>
                        <p className="text-xs text-muted-foreground">
                          {Math.round((module.completed / module.lessons) * 100)}% completion
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
