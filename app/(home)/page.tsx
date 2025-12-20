import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Code, DraftingCompass, Bot } from "lucide-react";
import { Inter } from "next/font/google";
import Hero from "./_components/Hero";
import Navbar from "./_components/Navbar";


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
     <Navbar/>
      <div className="relative">
        <Hero />
      </div>
      <div className=" flex  flex-col items-center justify-center text-center py-32 space-y-6 bg-[#0a0b0f]">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Build Real Engineering Skills</h1>
        <p className="text-muted-foreground text-2xl lg:w-2/5 p-2">
          Bridge the gap between theory and industry application. Our Curriculum
          focuses on the tools that modern engineers actually use.
        </p>
        <div className="flex flex-col lg:flex-row my-20 space-x-8 container h-full space-y-16 p-4">
          <div className="flex flex-col flex-1 min-h-full gap-8">
            {SecondList.map((item) => {
              return (
                <div key={item.title} className="flex gap-4 h-full lg:w-4/5">
                  <div
                    style={{ backgroundColor: item.color }}
                    className={`h-16 w-16 flex items-center rounded-2xl bg-${item.color}/80`}
                  >
                    <item.icon className=" w-15 h-15 p-4 " />
                  </div>

                  <div className="flex flex-col items-start text-start space-y-2">
                    <h2 className="text-2xl font-semibold">{item.title}</h2>
                    <h3 className="text-muted-foreground text-xl">
                      {item.desc}
                    </h3>
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
