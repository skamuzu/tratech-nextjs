import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

export default function HomeSheet() {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden">
                <MenuIcon className="text-gray-500"/>
            </SheetTrigger>
            <SheetContent side="right" className="w-full">
            Hello
            </SheetContent>
        </Sheet>

    )
}