import { Card } from "@/components/ui/card";

export default function RecentActivity() {
  return (
    <div className="px-8 flex flex-col ">
      <div>
        <h2 className="text-3xl font-semibold">Recent Activity</h2>
        <p className="text-muted-foreground">Live actions and updates.</p>
      </div>

      <Card className="mt-2 h-full"></Card>
    </div>
  );
}
