import getAllCourses from "@/lib/api/courses";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const courses = await getAllCourses();

  return (
    <div>
      <div className="relative flex flex-col items-center text-center justify-center p-8 py-16">
        <div className="absolute inset-0 opacity-[0.2] grid-bg"></div>
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950"></div>
        <div className="relative z-10 p-4 flex flex-col justify-center gap-4 items-center">
          <h1 className="text-6xl lg:text-8xl font-bold  bg-linear-to-r from-white to-white/40 text-transparent bg-clip-text">
            Courses
          </h1>
          <p className="text-muted-foreground tracking-wider w-full lg:w-4/5 mx-auto text-xl">
            Transform your skills through hands-on courses designed to make you
            a great mechanical engineer for the future.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto gap-8 mb-32 p-2">
        {courses.map((course) => (
          <Card
            key={course.id}
            className="p-0 w-full rounded-2xl mx-auto group bg-white/5 transition-all hover:bg-white/10 hover:scale-[1.02]"
          >
            <Image
              src={course.image}
              width={1509}
              height={1500}
              alt="Course Logo"
              className="w-full aspect-video rounded-t-2xl mb-0"
            />
            <div className="px-8 pt-2 pb-8 flex flex-col gap-2 items-start">
              <h1 className="text-3xl font-semibold group-hover:text-white/90 transition-colors">
                {course.title}
              </h1>
              <p className="text-muted-foreground">{course.subtitle}</p>
              <div className="flex w-full justify-between items-center">
                <p className="flex items-center gap-1">
                  {course.status === "draft" ? "Coming Soon" : "Start Learning"}
                  <ArrowRightIcon />
                </p>
                <Button className="rounded-2xl ">Course Details</Button>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1.5 scale-x-0 group-hover:scale-x-100 transition-transform origin-left bg-gradient-to-r from-white/0 via-white/50 to-white/0"></div>
          </Card>
        ))}
      </div>
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Join thousands of students mastering their craft with MESA Tratech
          </p>
         <Button asChild className="text-background rounded-2xl p-6 text-xl">
            <Link href="/">
            <h2>Back to home</h2>
            </Link>
         </Button>
        </div>
      </section>
    </div>
  );
}
