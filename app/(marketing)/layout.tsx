import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "lucide-react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    {children}
    </>
  );
}
