import ProgressWithSidebar from '@/components/Progress/ProgressWithSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'JapoGo: Progress',
  description: 'Track your Japanese learning progress and see detailed statistics.',
};

export default function ProgressPage() {
  return <ProgressWithSidebar />;
}