"use client";

import Logo from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  GraduationCap,
  Users2,
  FolderOpen,
  Rocket,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

const Links = [
  {
    icon: LayoutDashboard,
    name: "Overview",
    href: "/admin",
  },
  {
    icon: GraduationCap,
    name: "Courses",
    href: "/admin/courses",
  },
  {
    icon: Users2,
    name: "Users",
    href: "/admin/users",
  },
  {
    icon: FolderOpen,
    name: "Resources",
    href: "/admin/resources",
  },
  {
    icon: Rocket,
    name: "Projects",
    href: "/admin/projects",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-start flex-row">
        <Logo />
        <h1 className="font-bold text-2xl">Tratech Club</h1>
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent className="p-2">
        <SidebarMenu>
          {Links.map((link) => {
            return (
              <SidebarMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 p-3 m-1 rounded-xl hover:bg-background/90 hover:text-foreground",
                    pathname === link.href
                      ? "bg-background/90 text-foreground"
                      : "text-muted-foreground"
                  )}
                >
                  <link.icon />
                  {link.name}
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator className="mx-auto" />

      <SidebarFooter>
        <SignOutButton>
          <Button
            variant={"ghost"}
            className="p-6 bg-transparent text-muted-foreground text-lg flex items-center justify-start "
          >
            <LogOut className="w-8! h-8!" /> Log Out
          </Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
