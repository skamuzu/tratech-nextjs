import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, Home, BookOpen, Info, Mail, ArrowRight, GraduationCap, FolderOpen, Rocket, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants/navigation";
import Logo from "@/components/Logo";
import { Separator } from "@/components/ui/separator";
import { checkRole } from "@/lib/roles";

const iconMap: Record<string, any> = {
 
  "Courses": GraduationCap,
  "Resources": FolderOpen,
  "Projects": Rocket,
  "Admin": ShieldCheck,
  
};

const iconColors: Record<string, string> = {
  "Courses": "from-purple-500 to-purple-600",
  "Projects": "from-green-500 to-green-600",
  "Home": "from-blue-500 to-blue-600",
  "Admin": "from-red-500 to-red-600",

};

export default async function HomeSheet() {
  const isAdmin = await checkRole("admin");
  
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden" aria-label="Open menu">
        <div className="p-2 hover:bg-zinc-800/50 rounded-lg transition-colors">
          <MenuIcon className="text-white h-6 w-6" />
        </div>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px] bg-zinc-950 border-zinc-800">
        <SheetHeader className="text-left  pt-2">
          <div className="flex items-center gap-2 ">
            <Logo />
          </div>
  
        </SheetHeader>

        
        <nav className="flex flex-col gap-3 p-4">
          {NAVIGATION_LINKS.map((link) => {
            const Icon = iconMap[link.name] || Home;
            const gradient = iconColors[link.name] || "from-blue-500 to-blue-600";
            
            return (
              <Link
                key={link.name}
                href={link.href}
                className="group"
              >
                <div className="flex items-center gap-4 p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="flex-1 text-lg font-medium text-white">
                    {link.name}
                  </span>
                  <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
          
          {isAdmin && (
            <Link href="/admin" className="group">
              <div className="flex items-center gap-4 p-2 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg">
                  <ShieldCheck className="h-6 w-6 text-white" />
                </div>
                <span className="flex-1 text-lg font-medium text-white">
                  Admin
                </span>
                <ArrowRight className="h-5 w-5 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          )}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
