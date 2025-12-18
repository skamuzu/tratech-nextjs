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
        <h1 className="text-6xl font-bold">Build Real Engineering Skills</h1>
        <p className="text-muted-foreground text-2xl w-2/5">
          Bridge the gap between theory and industry application. Our Curriculum
          focuses on the tools that modern engineers actually use.
        </p>
        <div className="flex my-20 space-x-8 container h-full">
          <div className="flex flex-col flex-1 min-h-full p-2 ">
            {SecondList.map((item) => {
              return (
                <div key={item.title} className="flex gap-4 h-full w-4/5">
                  <div
                    style={{ backgroundColor: item.color }}
                    className="h-16 w-16 flex items-center rounded-2xl"
                  >
                    <item.icon className=" w-15 h-15 p-4" />
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
          <div className="relative w-full flex-1  rounded-xl opacity-60">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 h-full to-purple-500 rounded-lg filter blur-sm opacity-70"></div>

            <div className="relative bg-gray-800 rounded-t-2xl  flex-col items-center justify-center">
              <div className="flex items-center space-x-2 p-6">
                <div className="flex space-x-2">
                  <div className="w-5 h-5 rounded-full bg-red-600"></div>
                  <div className="w-5 h-5 rounded-full bg-yellow-300"></div>
                  <div className="w-5 h-5 rounded-full bg-green-700"></div>
                </div>
                <p className="text-muted-foreground">
                  simulation_controller.py
                </p>
              </div>
            </div>
            <div className=" bg-gray-900 relative h-fit rounded-b-2xl">
              <div
                className={`p-6 flex-col justify-items-start text-lg blur-out-xs`}
              >
                <p>
                  <span className="text-purple-400">import</span> numpy{" "}
                  <span className="text-purple-400">as</span> np
                </p>
                <p>
                  <span className="text-purple-400">from</span> mechatronics{" "}
                  <span className="text-purple-400">import</span> RobotArm
                </p>
                <p className="text-gray-500 italic">
                  # Initialize 6-DOF Robot Arm for Simulation
                </p>
                <p>
                  arm = RobotArm(dof=<span className="text-yellow-300">6</span>,
                  payload_kg=<span className="text-yellow-300">5.0</span>)
                </p>
                <p>
                  <span className="text-purple-400">def</span>{" "}
                  <span className="text-blue-400">optimize_trajectory</span>
                  (target_pos):
                </p>
                <div className="flex flex-col items-start mx-8">
                  <span className="text-green-400">
                    """Calculate inverse kinematics via ML"""
                  </span>
                  current_pos = arm.get_position()
                  <span className="text-gray-500 italic">
                    # AI-based path planning
                  </span>
                  path = ai_planner.compute( start=current_pos, end=target_pos,
                  mode=
                  <span className="text-green-300">'energy_efficient'</span>)
                  <p>
                    <span className="text-purple-400">return</span>{" "}
                    arm.execute_path(path)
                  </p>
                </div>
                <span className="text-blue-400">print</span>(
                <span className="text-green-300">
                  "Starting simulation sequence..."
                </span>
                )
                <p>
                  optimize_trajectory([
                  <span className="text-yellow-300">10</span>,{" "}
                  <span className="text-yellow-300">25</span>,{" "}
                  <span className="text-yellow-300">30</span>])
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
