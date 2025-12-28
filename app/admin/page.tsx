import Stats from "./_components/Stats";
import QuickActions from "./_components/QuickActions";
import RecentActivity from "./_components/RecentActivity";
import CourseTable from "./_components/CourseTable";

export default function Page() {
  return (
    <div className="w-full container mx-auto mb-12">
      <Stats />
      <div className="grid grid-cols-3 ">
        <div className="col-span-2">
          <QuickActions />
          <CourseTable/>
        </div>
        <RecentActivity/>
      </div>
    </div>
  );
}
