import { CalendarClock, CheckCircle2, XCircle, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import PostsTable from '@/components/PostsTable';

const stats = [
  { label: 'Total posts', value: 124, sub: 'All time', color: 'text-gray-900' },
  { label: 'Published', value: 98, sub: '79% success rate', color: 'text-green-600' },
  { label: 'Scheduled', value: 18, sub: 'Next: 2h from now', color: 'text-amber-600' },
  { label: 'Failed', value: 8, sub: 'Needs attention', color: 'text-red-600' },
];

export default function DashboardPage() {
  return (
    <div className="p-6 max-w-7xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-0.5">
            {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
        <Link href="/dashboard/upload"
          className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg
            text-sm font-semibold hover:bg-indigo-700 transition-colors">
          + Upload Excel
        </Link>
      </div>

      {/* Stats */}
      <div
        className="grid
  grid-cols-1
  sm:grid-cols-2
  xl:grid-cols-4
  gap-5"
      >
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-4">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">{s.label}</p>
            <p className={`text-3xl font-bold ${s.color}`}>{s.value}</p>
            <p className="text-xs text-gray-400 mt-1">{s.sub}</p>
          </div>
        ))}
      </div>

      {/* Posts table */}
      <PostsTable />
    </div>
  );
}