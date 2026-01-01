import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";

export default async function WelcomeMessage() {
  const user = await currentUser();
  const firstName = user?.firstName || "Admin";
  
  const greeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <Card className="overflow-hidden border-2 bg-gradient-to-br from-primary/5 via-background to-background">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-3xl md:text-4xl font-bold">
                {greeting()}, {firstName}! 👋
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Welcome to <span className="font-semibold text-foreground">MESA Tratech</span> Admin Dashboard. Here's what's happening today.
            </p>
          </div>
          <div className="hidden md:flex items-center justify-center p-3 rounded-full bg-primary/10">
            <Sparkles className="h-8 w-8 text-primary" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
