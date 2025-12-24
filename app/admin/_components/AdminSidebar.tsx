"use client";

import Logo from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
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
    <Sidebar variant="inset">
      <SidebarHeader className="flex items-center justify-start flex-row">
        <Logo />
        <h1 className="font-bold text-2xl">Tratech Club</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {Links.map((link) => {
            return (
              <SidebarMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 p-2 m-1 rounded-xl hover:bg-background/90 hover:text-foreground",
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
      <SidebarFooter>
          <SignOutButton>
            <Button variant={"outline"} className="p-4 bg-transparent text-white">
                <LogOut /> Log Out
            </Button>
          </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
