"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PostsTable from "@/components/PostsTable";

interface Stats {
  total_posts: number;
  scheduled: number;
  published: number;
  failed: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats>({
    total_posts: 0,
    scheduled: 0,
    published: 0,
    failed: 0,
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(
          "https://socailautoposterbackend-production.up.railway.app/posts/stats",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          setLoading(false);
          return;
        }

        const data = await response.json();

        setStats(data);

        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const statCards = [
    {
      label: "Total Posts",
      value: stats.total_posts,
      sub: "All time",
      color: "text-gray-900",
    },
    {
      label: "Published",
      value: stats.published,
      sub: "Successfully published",
      color: "text-green-600",
    },
    {
      label: "Scheduled",
      value: stats.scheduled,
      sub: "Waiting to publish",
      color: "text-amber-600",
    },
    {
      label: "Failed",
      value: stats.failed,
      sub: "Needs attention",
      color: "text-red-600",
    },
  ];

  return (
    <div className="p-6 max-w-7xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-900">
            Dashboard
          </h1>

          <p className="text-sm text-gray-400 mt-0.5">
            {new Date().toLocaleDateString(
              "en-US",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              }
            )}
          </p>
        </div>

        <Link
          href="/dashboard/upload"
          className="
            flex items-center gap-2
            bg-indigo-600 text-white
            px-4 py-2 rounded-lg
            text-sm font-semibold
            hover:bg-indigo-700
            transition-colors
          "
        >
          + Upload Excel
        </Link>
      </div>

      {/* Stats */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          gap-5
          mb-6
        "
      >
        {statCards.map((card) => (
          <div
            key={card.label}
            className="
              bg-white
              border border-gray-100
              rounded-xl
              p-4
            "
          >
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-2">
              {card.label}
            </p>

            <p
              className={`text-3xl font-bold ${card.color}`}
            >
              {loading ? "..." : card.value}
            </p>

            <p className="text-xs text-gray-400 mt-1">
              {card.sub}
            </p>
          </div>
        ))}
      </div>

      {/* Posts Table */}
      <PostsTable />
    </div>
  );
}