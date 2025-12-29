import {
  UserPlusIcon,
  FileUp,
  NotepadText,
  type LucideIcon,
  MicVocal,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function QuickActions() {
  type ActionColor = "blue" | "purple" | "green"| "gray";

  interface QuickAction {
    icon: LucideIcon;
    title: string;
    desc: string;
    color: ActionColor;
  }

  const actions: QuickAction[] = [
    {
      icon: UserPlusIcon,
      title: "Add Member",
      desc: "Invite student or staff",
      color: "blue",
    },
    {
      icon: FileUp,
      title: "Add Module",
      desc: "To existing course",
      color: "purple",
    },
    {
      icon: NotepadText,
      title: "Draft Lesson",
      desc: "Create lesson content",
      color: "green",
    },
    {
      icon: MicVocal,
      title: "Announcements",
      desc: "Notify All Members",
      color:"gray"

    }
  ];

  const bgColors: Record<ActionColor, string> = {
    blue: "bg-blue-500/10",
    purple: "bg-purple-500/10",
    green: "bg-green-500/10",
    gray: "bg-gray-500/10"
  };

  const iconColors: Record<ActionColor, string> = {
    blue: "text-blue-500",
    purple: "text-purple-500",
    green: "text-green-500",
    gray: "text-gray-500"
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold">Quick Actions</h1>
      <div className="grid grid-cols-4 space-x-6 py-4 ">
        {actions.map((item) => {
          return (
            <Card
              key={item.title}
              className="p-4 flex flex-row items-start space-y-2 hover:shadow-lg cursor-pointer"
            >
              <div
                className={`h-12 w-12 flex items-center justify-center rounded-2xl ${
                  bgColors[item.color]
                }`}
              >
                <item.icon
                  className={`w-10 h-10 p-2 ${iconColors[item.color]}`}
                />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
