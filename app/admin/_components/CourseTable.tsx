import { Card } from "@/components/ui/card";
import {
  Code2Icon,
  Box,
  Bot,
  List,
  LucideNotebookPen,
  Settings,
  LucideIcon,
  Grid3x2,
  FileText,
} from "lucide-react";

interface CourseListI {
  name: string;
  image: LucideIcon | string;
  status: Status;
  moduleNumber: number;
  lessonNumber: number;
}

const courseList: CourseListI[] = [
  {
    name: "Python For Engineers",
    image: Code2Icon,
    status: "published",
    moduleNumber: 12,
    lessonNumber: 48,
  },
  {
    name: "Solidworks Essentials",
    image: Box,
    status: "draft",
    moduleNumber: 8,
    lessonNumber: 32,
  },
  {
    name: "Intro to Robotics",
    image: Bot,
    status: "published",
    moduleNumber: 15,
    lessonNumber: 60,
  },
];

type Status = "published" | "draft";

const StatusColor: Record<Status, string> = {
  published: "border-green-500 text-green-500",
  draft: "border-orange-300 text-orange-300",
};

const StatusBgColor: Record<Status, string> = {
  published: "bg-green-500/10",
  draft: "bg-orange-300/10",
};

export default function CourseTable() {
  return (
    <section className="flex flex-col space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Course Portfolio</h2>
        <p className="text-muted-foreground">
          Manage curriculum structure, modules and lessons.
        </p>
      </div>
      <Card className="flex flex-col gap-0 py-2">
        {courseList.map((item) => (
          <div
            className="grid grid-cols-10 w-full border-b px-4 py-4  "
            key={item.name}
          >
            <div className="flex col-span-7">
              <div className="bg-black flex items-center justify-center p-4 rounded-xl border mr-4">
                <item.image />
              </div>
              <div className="flex flex-col space-y-2">
                <h3 className="font-bold text-xl">{item.name}</h3>
                <div className="flex items-center space-x-4">
                  <span
                    className={`${StatusColor[item.status]} ${
                      StatusBgColor[item.status]
                    } p-1.5  border rounded-sm  capitalize text-xs`}
                  >
                    {item.status}
                  </span>
                  <span className="text-muted-foreground flex items-center space-x-2">
                    <Grid3x2 />
                    <p>{item.moduleNumber} Modules</p>
                  </span>
                  <span className="text-muted-foreground flex items-center space-x-2">
                    <FileText />
                    <p>{item.lessonNumber} Lessons</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center  col-span-2 justify-around">
              <span className="bg-black flex p-3 border rounded-lg items-center text-lg space-x-2 cursor-pointer">
                <List /> 
                <p>Modules</p>
              </span>
              <span className="bg-black flex p-3 border rounded-lg items-center text-lg space-x-2 cursor-pointer">
                <LucideNotebookPen />
                <p>Lessons</p>
              </span>
            </div>
            <div className="flex items-center col-span-1 justify-center">
              <Settings className="text-muted-foreground w-10 h-10  stroke-1 cursor-pointer " />
            </div>
          </div>
        ))}
        <p className="flex items-center justify-center p-4 text-lg">View All Courses</p>
      </Card>
    </section>
  );
}
