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
    <section>
      <div>
        <h2 className="text-3xl font-semibold">Course Portfolio</h2>
        <p className="text-muted-foreground">
          Manage curriculum structure, modules and lessons.
        </p>
      </div>
      <Card className="flex flex-col gap-0 py-2">
        {courseList.map((item) => (
          <div className="flex  items-center w-full border-b px-4 py-2  justify-between">
            <div className="flex">
              <div className="bg-black flex items-center justify-center p-4 rounded-xl border mr-4">
                <item.image />
              </div>
              <div>
                <h3 className="font-bold text-xl">{item.name}</h3>
                <div className="flex items-center space-x-4">
                  <span
                    className={`${StatusColor[item.status]} ${
                      StatusBgColor[item.status]
                    } p-1.5  border rounded-sm font-bold capitalize text-xs`}
                  >
                    {item.status}
                  </span>
                  <span className="text-muted-foreground flex items-center">
                    <Grid3x2 />
                    {item.moduleNumber} Modules
                  </span>
                  <span className="text-muted-foreground flex items-center">
                    <FileText />
                    {item.lessonNumber} Lessons
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center  text-muted-foreground">
              <span className="bg-black flex p-2 border rounded-lg">
                <List /> Modules
              </span>
              <span className="bg-black flex p-2 border rounded-lg">
                <LucideNotebookPen /> Lessons
              </span>
            </div>
            <Settings className="text-muted-foreground" />
          </div>
        ))}
      </Card>
    </section>
  );
}
