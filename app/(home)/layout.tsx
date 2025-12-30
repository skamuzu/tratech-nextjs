import { Home } from "lucide-react";
import Navbar from "./_components/Navbar";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dark">
      <Navbar/>
      <main className="w-full">{children}</main>
    </div>
  );
}
