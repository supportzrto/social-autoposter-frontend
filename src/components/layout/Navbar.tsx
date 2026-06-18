"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">
            ⚡
          </div>

          <span className="text-2xl font-bold text-gray-900">
            SocialPoster
          </span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">

          <Link href="/">
            Home
          </Link>

          <Link href="/pricing">
            Pricing
          </Link>

          <Link href="/about">
            About
          </Link>

          <Link href="/contact">
            Contact
          </Link>

        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <Link
            href="/login"
            className="text-gray-700 font-medium"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="
            bg-indigo-600
            hover:bg-indigo-700
            text-white
            px-5
            py-2
            rounded-xl
            font-medium
            transition
            "
          >
            Get Started
          </Link>

        </div>

      </div>
    </header>
  );
}