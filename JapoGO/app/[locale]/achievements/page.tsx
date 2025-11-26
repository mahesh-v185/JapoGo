import { Metadata } from 'next';
import AchievementProgress from '@/components/Progress/AchievementProgress';
import Sidebar from '@/components/reusable/Menu/Sidebar';

export const metadata: Metadata = {
  title: 'Achievements - JapoGo',
  description: 'Track your learning progress and unlock achievements in JapoGo',
};

export default function AchievementsPage() {
  return (
    <div className="min-h-[100dvh] max-w-[100dvw] flex">
      <Sidebar />
      <div className="flex flex-col gap-4 w-full lg:w-4/5 px-4 md:px-8 pb-20">
        <AchievementProgress />
      </div>
    </div>
  );
}