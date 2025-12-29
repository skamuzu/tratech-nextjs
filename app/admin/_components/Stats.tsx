import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users2, GraduationCap, BookOpen, Users } from "lucide-react";

const List = [
  {
    icon: Users2,
    title: "Active Users",
    value: 4,
  },
  {
    icon: GraduationCap,
    title: "Published Courses",
    value: 5,
  },
  {
    icon: BookOpen,
    title: "Total Lessons",
    value: 5,
  },
];

export default function Stats() {
  return (
    <div className="pt-4">
      <h1 className="text-3xl font-bold">Stats</h1>
      <div className="grid grid-cols-3 w-full container justify-around gap-4 py-4 mx-auto">
        {List.map((item) => {
          return (
            <Card key={item.title} className="w-full flex flex-col">
              <CardHeader>
                <item.icon className="w-10! h-10! text-muted-foreground" />
                <CardTitle className="text-4xl">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground text-lg">
                {item.title}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
