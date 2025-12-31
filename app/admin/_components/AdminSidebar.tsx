"use client";

import Logo from "@/components/Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
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
    <Sidebar  variant="floating" >
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
          <div className="flex-shrink-0">
            <Logo />
          </div>
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <h1 className="font-bold text-lg leading-tight">MESA Tratech</h1>
            <p className="text-xs text-muted-foreground">Admin Dashboard</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarSeparator className="mx-auto" />
      <SidebarContent className="p-3">
        <SidebarMenu className="space-y-1">
          {Links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild isActive={isActive}>
                  <Link href={link.href}>
                    <link.icon />
                    <span>{link.name}</span>
                  </Link>
                </SidebarMenuButton>
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
            className="w-full justify-start gap-3 text-muted-foreground hover:text-foreground hover:bg-muted group-data-[collapsible=icon]:justify-center"
          >
            <LogOut className="h-5 w-5" />
            <span className="group-data-[collapsible=icon]:hidden">Log Out</span>
          </Button>
        </SignOutButton>
      </SidebarFooter>
    </Sidebar>
  );
}
