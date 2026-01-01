import { Bell, Search } from "lucide-react";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default async function Navbar() {
  const user = await currentUser();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4 flex-1 max-w-md">
          <SidebarTrigger/>
          <h1 className="text-xl font-semibold hidden lg:block">Dashboard</h1>
         
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="relative h-9 w-9"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-600" />
          </Button>

          {user && (
            <div className="flex items-center gap-3 pl-3 border-l">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium leading-none">
                  {user.firstName} {user.lastName}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {user.primaryEmailAddress?.emailAddress}
                </p>
              </div>
              <Image
                src={user.imageUrl}
                alt={`${user.firstName} ${user.lastName}`}
                width={40}
                height={40}
                className="rounded-full ring-2 ring-border"
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
