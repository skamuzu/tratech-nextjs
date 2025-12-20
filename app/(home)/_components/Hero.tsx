import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950"></div>
      <div className="absolute inset-0 opacity-[0.04] grid-bg"></div>
      <div className="relative z-10 max-w-6xl mx-auto text-center ">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
          OPEN TO ALL MEMBERS
        </div>
        <h1 className=" text-6xl md:text-7xl lg:text-8xl font-bold p-2 mx-auto">
          <span className=" bg-linear-to-r from-white to-white/40 text-transparent bg-clip-text">
            Master the Future of
          </span>{" "}
          <span
            className="relative z-10 tracking-wide
  bg-gradient-to-r from-red-500 via-yellow-400 to-cyan-400
  bg-clip-text text-transparent
  md:bg-none md:text-white"
          >
            Mechanical Engineering
          </span>
        </h1>

        <div className="rainbow-underline hidden md:block"></div>

        <p className="text-muted-foreground text-2xl mt-10 tracking-wider p-2 md:p-0">
          From CAD designs to AI-driven robotics. Join our free learning
          platform designed specifically for the next generation of mechanical
          engineers.
        </p>
        <hr className="my-10" />
        <div className="mx-auto mt-10 space-x-8 space-y-8">
          <Button
            asChild
            variant={"default"}
            className="p-10 text-2xl rounded-2xl"
          >
            <Link href={"/dashboard"}>
              Start Learning Now
              <Rocket />
            </Link>
          </Button>
          <Button
            asChild
            variant={"outline"}
            className="p-10 text-2xl rounded-2xl"
          >
            <Link href={"/dashboard"}>Explore Curriculum</Link>
          </Button>
          <div className="mt-24 grid grid-cols-2 gap-8 md:grid-cols-4 border-white/10 pt-12 max-w-5xl mx-auto">
            <div className="p-4 rounded-xl ">
              <div className="text-4xl font-bold text-white mb-1">4+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Free Courses
              </div>
            </div>
            <div className="p-4 rounded-xl ">
              <div className="text-4xl font-bold text-white mb-1">10+</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Active Students
              </div>
            </div>
            <div className="p-4 rounded-xl ">
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                Free Access
              </div>
            </div>
            <div className="p-4 rounded-xl ">
              <div className="text-4xl font-bold text-white mb-1">Weekly</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                New Content
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
