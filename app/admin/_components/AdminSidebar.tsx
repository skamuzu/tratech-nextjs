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
    <Sidebar  className="border-r">
      <SidebarHeader className="flex items-center justify-start flex-row gap-2 p-4">
        <Logo />
        <h1 className="font-bold text-xl">Tratech Club</h1>
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent className="p-3">
        <SidebarMenu className="space-y-1">
          {Links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <SidebarMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator className="mx-auto"/>

      <SidebarFooter className="p-3">
        <SignOutButton>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted"
          >
            <LogOut className="h-5 w-5" />
            <span>Log Out</span>
          </Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
