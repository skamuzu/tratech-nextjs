import { Home } from "lucide-react";
import HomeNavbar from "./_components/HomeNavbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      <HomeNavbar/>
      <main className="w-full">{children}</main>
    </div>
  );
}
