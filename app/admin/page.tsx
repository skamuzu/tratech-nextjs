import Stats from "./_components/Stats";
import QuickActions from "./_components/QuickActions";
import RecentActivity from "./_components/RecentActivity";
import CourseTable from "./_components/CourseTable";
import Navbar from "./_components/Navbar";

export default function Page() {
  return (
    <div className="w-full container mx-auto mb-12 flex flex-col gap-8">
      <Stats />

      <QuickActions />
      <CourseTable />

      {/* <RecentActivity/> */}
    </div>
  );
}
