import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Code,
  DraftingCompass,
  Bot,
  CheckCircle2,
  Sparkles,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";
import HomeHero from "./_components/HomeHero";

const SecondList = [
  {
    icon: DraftingCompass,
    title: "Advanced CAD & Design",
    desc: "Master SolidWorks, Fusion 360, and generative design principles. Learn to create manufacturable parts, assemblies, and detailed technical drawings.",
    color: "#3b82f6",
  },
  {
    icon: Code,
    title: "Engineering Coding",
    desc: "Stop fearing code. Learn Python for data analysis, MATLAB for simulations, and C++ for embedded systems control.",
    color: "#a855f7",
  },
  {
    icon: Bot,
    title: "Robotics & Mechatronics",
    desc: "Integrate mechanical systems with electronics. Build robot arms, autonomous vehicles, and learn sensor integration with Arduino and Raspberry Pi.",
    color: "#22c55e",
  },
];

const features = [
  "Hands-on project-based learning",
  "Industry-standard software tutorials",
  "Real-world engineering challenges",
  "Community support and collaboration",
  "Regular workshops and webinars",
  "Career guidance and resources",
];

export default function Page() {
  return (
    <div className="bg-zinc-950">
      {/* Hero Section */}
      <div className="relative">
        <HomeHero />
      </div>

      {/* Skills Section */}
      <section className="flex flex-col items-center justify-center text-center text-white py-16 md:py-24 lg:py-32 px-4 bg-[#0a0b0f]">
        <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Build Real Engineering Skills
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto">
              Bridge the gap between theory and industry application. Our
              curriculum focuses on the tools that modern engineers actually
              use.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16">
            {SecondList.map((item) => (
              <Card
                key={item.title}
                className="bg-zinc-900/50 border-zinc-800 p-6 md:p-8 hover:bg-zinc-900 transition-colors group"
              >
                <div className="flex flex-col items-start text-start space-y-4">
                  <div
                    style={{ backgroundColor: item.color }}
                    className="h-14 w-14 md:h-16 md:w-16 flex items-center justify-center rounded-xl md:rounded-2xl transition-transform group-hover:scale-110"
                  >
                    <item.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 lg:py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Why Choose Us
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Everything You Need to Excel
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 md:p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-500 flex-shrink-0" />
                <span className="text-white text-base md:text-lg">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 px-4 bg-zinc-950">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 text-amber-400 text-sm font-medium">
            <Trophy className="w-4 h-4" />
            Start Your Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white px-4">
            Ready to Level Up Your Engineering Skills?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Join thousands of aspiring mechanical engineers learning the skills
            that matter. It's completely free and always will be.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl"
            >
              <Link href="/courses">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto px-8 py-6 text-lg rounded-xl border-zinc-700 text-white hover:bg-zinc-900"
            >
              <Link href="/courses">Browse Courses</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
