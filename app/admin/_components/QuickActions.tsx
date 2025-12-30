import {
  UserPlusIcon,
  FileUp,
  NotepadText,
  type LucideIcon,
  Megaphone,
  ArrowRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function QuickActions() {
  type ActionColor = "blue" | "purple" | "green" | "orange";

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
      icon: Megaphone,
      title: "Announcements",
      desc: "Notify all members",
      color: "orange",
    },
  ];

  const bgColors: Record<ActionColor, string> = {
    blue: "bg-blue-500/10 group-hover:bg-blue-500/20",
    purple: "bg-purple-500/10 group-hover:bg-purple-500/20",
    green: "bg-green-500/10 group-hover:bg-green-500/20",
    orange: "bg-orange-500/10 group-hover:bg-orange-500/20",
  };

  const iconColors: Record<ActionColor, string> = {
    blue: "text-blue-600 dark:text-blue-400",
    purple: "text-purple-600 dark:text-purple-400",
    green: "text-green-600 dark:text-green-400",
    orange: "text-orange-600 dark:text-orange-400",
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">Quick Actions</h2>
        <p className="text-muted-foreground">
          Common tasks and shortcuts for faster workflow.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions.map((item) => (
          <Card
            key={item.title}
            className="group p-4 flex flex-col gap-3 hover:shadow-lg hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between">
              <div
                className={`h-12 w-12 flex items-center justify-center rounded-xl transition-colors ${
                  bgColors[item.color]
                }`}
              >
                <item.icon className={`w-6 h-6 ${iconColors[item.color]}`} />
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
