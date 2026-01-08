import AdminStats from "./_components/AdminStats";
import AdminQuickActions from "./_components/AdminQuickActions";
import AdminRecentActivity from "./_components/AdminRecentActivity";
import CourseGrid from "./_components/CourseGrid";
import AdminWelcome from "./_components/AdminWelcome";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12 mx-auto max-w-[1600px]">
      <div className="flex flex-col gap-6 md:gap-8">
        <AdminWelcome />
        <AdminStats />
        <AdminQuickActions />
        <CourseGrid showHeader={true} />
        {/* <AdminRecentActivity /> */}
      </div>
    </div>
  );
}
