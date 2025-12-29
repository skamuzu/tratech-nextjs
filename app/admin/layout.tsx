import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "./_components/AdminSidebar";
import Navbar from "./_components/Navbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <Navbar />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
