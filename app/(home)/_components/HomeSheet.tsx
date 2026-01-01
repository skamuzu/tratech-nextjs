import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/lib/constants/navigation";
import Logo from "@/components/Logo";

export default function HomeSheet() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="text-gray-500" />
      </SheetTrigger>
      <SheetContent side="right" className="w-full p-4">
        <div className="flex flex-col gap-4 mt-8">
          {NAVIGATION_LINKS.map((link) => (
            <Button
              key={link.name}
              variant={"ghost"}
              asChild
              className="text-xl justify-start p-6"
            >
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
