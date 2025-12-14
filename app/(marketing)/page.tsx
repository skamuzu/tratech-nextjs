import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Rocket, Code, DraftingCompass, Bot } from "lucide-react";

const Links = [
  { name: "Courses", href: "#" },
  { name: "Resources", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Community", href: "#" },
];

const SecondList = [
  {
    icon: DraftingCompass,
    title: "Advanced CAD & Design",
    desc: " Master SolidWorks, Fusion 360, and generative design principles. Learn to create manufacturable parts, assemblies, and detailed technical drawings.",
    color: "blue",
  },
  {
    icon: Code,
    title: "Engineering Coding",
    desc: "Stop fearing code. Learn Python for data analysis, MATLAB for simulations, and C++ for embedded systems control.",
    color: "purple",
  },
  {
    icon: Bot,
    title: "Robotics & Mechatronics",
    desc: "Integrate mechanical systems with electronics. Build robot arms, autonomous vehicles, and learn sensor integration with Arduino and Raspberry Pi.",
    color: "green",
  },
];

export default function Page() {
  return (
    <div className="bg-zinc-950">
      <nav className="flex justify-between bg-navbar items-center shadow-xl border-b-muted text-2xl px-2">
        <Image src={"/myLogo.png"} alt="Logo" width={100} height={100} />
        <div className="flex">
          {Links.map((link) => (
            <Button
              key={link.name}
              variant={"link"}
              asChild
              className="text-xl"
            >
              <Link href={link.name}>{link.name}</Link>
            </Button>
          ))}
        </div>
        <Button variant={"link"} asChild className="text-xl">
          <Link href={"sign-up"}>Log In</Link>
        </Button>
      </nav>
      <div className="relative">
        <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-b from-zinc-900/50 to-zinc-950"></div>
          <div className="absolute inset-0 opacity-[0.03] grid-bg"></div>
          <div className="relative z-10 max-w-6xl mx-auto text-center ">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              OPEN TO ALL MEMBERS
            </div>
            <h1 className="text-8xl font-bold p-2 mx-auto">
              <span className=" bg-linear-to-r from-white to-white/40 text-transparent bg-clip-text">
                Master the Future of
              </span>{" "}
              Mechanical Engineering
            </h1>

            <div className="rainbow-underline"></div>

            <p className="text-muted-foreground text-2xl mt-10 tracking-wider">
              From CAD designs to AI-driven robotics. Join our free learning
              platform designed specifically for the next generation of
              mechanical engineers.
            </p>
            <hr className="my-10" />
            <div className="mx-auto mt-10 space-x-8">
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
                  <div className="text-4xl font-bold text-white mb-1">
                    Weekly
                  </div>
                  <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    New Content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className=" flex  flex-col items-center justify-center text-center py-32 space-y-6 bg-[#0a0b0f]">
        <h1 className="text-6xl font-bold">Build Real Engineering Skills</h1>
        <p className="text-muted-foreground text-2xl w-2/5">
          Bridge the gap between theory and industry application. Our Curriculum
          focuses on the tools that modern engineers actually use.
        </p>
        <div className="flex my-20 ">
          <div className="flex flex-col w-1/2 gap-8">
            {SecondList.map((item) => {
              return (
                <div key={item.title} className="flex gap-4">
                  <div style={{backgroundColor: item.color}} className="h-12 w-12 flex items-center rounded-2xl">

                  <item.icon className=" w-12 h-12 p-3" />
                  </div>

                  <div className="flex flex-col items-start text-start space-y-2">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <h3 className="text-muted-foreground text-xl">{item.desc}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
