
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  LayoutDashboard,
  Upload,
  CalendarClock,
  Settings,
  Zap,
  LogOut,
  Menu,
  X,
} from 'lucide-react';

import { clsx } from 'clsx';
import { useState } from 'react';

const nav = [
  {
    href: '/dashboard',
    icon: LayoutDashboard,
    label: 'Dashboard',
  },

  {
    href: '/dashboard/upload',
    icon: Upload,
    label: 'Upload Excel',
  },

  {
    href: '/dashboard/posts',
    icon: CalendarClock,
    label: 'All Posts',
  },

  {
    href: '/dashboard/settings',
    icon: Settings,
    label: 'Settings',
  },
];

export default function Sidebar() {
  const path = usePathname();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      <div
        className="md:hidden fixed top-0 left-0
        right-0 h-14 bg-white border-b
        border-gray-100 flex items-center
        justify-between px-4 z-50"
      >

        <div className="flex items-center gap-2">

          <div
            className="w-8 h-8 bg-indigo-600
            rounded-lg flex items-center
            justify-center"
          >

            <Zap
              size={15}
              className="text-white"
            />

          </div>

          <span
            className="font-bold text-gray-900"
          >
            SocialPoster
          </span>

        </div>

        <button
          onClick={() =>
            setMobileOpen(true)
          }
        >

          <Menu size={22} />

        </button>

      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() =>
            setMobileOpen(false)
          }
          className="fixed inset-0
          bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          `
          fixed md:sticky top-0 left-0
          z-50 md:z-0

          w-56 h-screen bg-white
          border-r border-gray-100

          flex flex-col

          transition-transform duration-300
          `,

          mobileOpen
            ? 'translate-x-0'
            : '-translate-x-full md:translate-x-0'
        )}
      >

        {/* Logo */}
        <div
          className="h-16 flex items-center
          justify-between px-5
          border-b border-gray-100"
        >

          <div
            className="flex items-center
            gap-2.5"
          >

            <div
              className="w-8 h-8 bg-indigo-600
              rounded-lg flex items-center
              justify-center"
            >

              <Zap
                size={15}
                className="text-white"
              />

            </div>

            <span
              className="font-bold text-gray-900
              text-base"
            >
              SocialPoster
            </span>

          </div>

          {/* Mobile Close */}
          <button
            onClick={() =>
              setMobileOpen(false)
            }
            className="md:hidden"
          >

            <X size={20} />

          </button>

        </div>

        {/* Nav */}
        <nav
          className="flex-1 py-4 px-3
          flex flex-col gap-1"
        >

          {nav.map(
            ({
              href,
              icon: Icon,
              label,
            }) => (

              <Link
                key={href}
                href={href}
                onClick={() =>
                  setMobileOpen(false)
                }
                className={clsx(
                  `
                  flex items-center gap-3
                  px-3 py-2.5 rounded-lg
                  text-sm font-medium
                  transition-colors
                  `,

                  path === href
                    ? 'bg-indigo-50 text-indigo-700'
                    : `
                      text-gray-500
                      hover:bg-gray-50
                      hover:text-gray-900
                    `
                )}
              >

                <Icon size={17} />

                {label}

              </Link>
            )
          )}

        </nav>

        {/* Bottom */}
        <div
          className="p-3 border-t
          border-gray-100"
        >

          <button
            className="w-full flex items-center
            gap-3 px-3 py-2.5 rounded-lg
            text-sm text-gray-400
            hover:text-red-500
            hover:bg-red-50
            transition-colors"
          >

            <LogOut size={17} />

            Sign out

          </button>

        </div>

      </aside>
    </>
  );
}
