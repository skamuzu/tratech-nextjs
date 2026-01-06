"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
  Eye,
  Edit,
  Trash2,
  MoreVertical,
  BookOpen,
  Layers,
  Users,
  Clock,
  CheckCircle,
  Download,
  Upload,
  TrendingUp,
  Grid3x3,
  List,
  SortAsc,
} from "lucide-react";
import Image from "next/image";

export default function CoursesPage() {
  // Mock data for demonstration
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      subtitle: "Learn the fundamentals of HTML, CSS, and JavaScript",
      image: null,
      status: "published",
      modules: 8,
      lessons: 45,
      students: 234,
      progress: 75,
      lastUpdated: "2 days ago",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      subtitle: "Master advanced React concepts and design patterns",
      image: null,
      status: "published",
      modules: 6,
      lessons: 32,
      students: 189,
      progress: 100,
      lastUpdated: "1 week ago",
    },
    {
      id: 3,
      title: "Python for Data Science",
      subtitle: "Comprehensive guide to data analysis with Python",
      image: null,
      status: "draft",
      modules: 10,
      lessons: 58,
      students: 0,
      progress: 45,
      lastUpdated: "3 days ago",
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      subtitle: "Create beautiful and user-friendly interfaces",
      image: null,
      status: "published",
      modules: 7,
      lessons: 38,
      students: 156,
      progress: 90,
      lastUpdated: "5 days ago",
    },
  ];

  const stats = [
    {
      label: "Total Courses",
      value: "24",
      change: "+3",
      icon: GraduationCap,
      color: "text-blue-600 dark:text-blue-400",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      label: "Published",
      value: "18",
      change: "+2",
      icon: CheckCircle,
      color: "text-green-600 dark:text-green-400",
      bgColor: "bg-green-50 dark:bg-green-950/30",
    },
    {
      label: "Draft",
      value: "6",
      change: "+1",
      icon: Clock,
      color: "text-amber-600 dark:text-amber-400",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
    },
    {
      label: "Total Students",
      value: "1,247",
      change: "+127",
      icon: Users,
      color: "text-purple-600 dark:text-purple-400",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 mx-auto max-w-[1600px]">
      {/* Page Header */}
      <div className="flex flex-col gap-6 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              Course Management
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage your course library, create new courses, and track engagement
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Create Course
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">{stat.value}</p>
                        <Badge
                          variant="outline"
                          className="text-xs border-green-200 text-green-700 bg-green-50 dark:bg-green-950/30"
                        >
                          {stat.change}
                        </Badge>
                      </div>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <Icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Filters and Search */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search courses by title, description, or instructor..."
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
              <Select defaultValue="recent">
                <SelectTrigger className="w-[140px]">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="title">Title A-Z</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon">
                <Grid3x3 className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Course Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/30"
          >
            {/* Course Header */}
            <CardHeader className="space-y-3 pb-4">
              <div className="flex items-start gap-3">
                <div className="relative flex-shrink-0">
                  {course.image ? (
                    <div className="relative h-16 w-16 rounded-lg overflow-hidden ring-2 ring-border group-hover:ring-primary/50 transition-all">
                      <Image
                        src={course.image}
                        alt={course.title}
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
                      {course.title}
                    </h3>
                    <Badge
                      variant="outline"
                      className={`text-xs font-medium mt-1.5 px-2 py-0.5 ${
                        course.status === "published"
                          ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/30"
                          : "bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-950/30"
                      }`}
                    >
                      {course.status === "published" ? (
                        <CheckCircle className="h-3 w-3 mr-1" />
                      ) : (
                        <Clock className="h-3 w-3 mr-1" />
                      )}
                      {course.status.charAt(0).toUpperCase() +
                        course.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 min-h-[2.5rem]">
                {course.subtitle}
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">
                    Content Progress
                  </span>
                  <span className="font-medium">{course.progress}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-primary h-2 rounded-full transition-all duration-500"
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>
            </CardHeader>

            {/* Stats Section */}
            <CardContent className="pt-4 space-y-4 border-t bg-muted/20">
              <div className="flex items-center justify-around">
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-1.5 mb-1">
                    <div className="p-1.5 rounded-md bg-blue-500/10">
                      <Layers className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <span className="text-lg font-bold">{course.modules}</span>
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
                    <span className="text-lg font-bold">{course.lessons}</span>
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
                    <span className="text-lg font-bold">{course.students}</span>
                  </div>
                  <span className="text-xs text-muted-foreground font-medium">
                    Students
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye className="h-3.5 w-3.5 mr-1.5" />
                  View
                </Button>
                <Button variant="default" size="sm" className="flex-1">
                  <Edit className="h-3.5 w-3.5 mr-1.5" />
                  Edit
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-8">
        <p className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1-4</span> of{" "}
          <span className="font-medium">24</span> courses
        </p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" disabled>
            Previous
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button variant="outline" size="sm">
            3
          </Button>
          <Button variant="outline" size="sm">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
