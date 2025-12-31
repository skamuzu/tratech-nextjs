import Stats from "./_components/Stats";
import QuickActions from "./_components/QuickActions";
import RecentActivity from "./_components/RecentActivity";
import CourseGrid from "./_components/CourseGrid";
import Navbar from "./_components/Navbar";
import WelcomeMessage from "./_components/WelcomeMessage";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-6 md:py-8 lg:py-12 mx-auto max-w-[1600px]">
      <div className="flex flex-col gap-6 md:gap-8">
        <WelcomeMessage />
        <Stats />
        <QuickActions />
        <CourseGrid />
        {/* <RecentActivity /> */}
      </div>
    </div>
  );
}
