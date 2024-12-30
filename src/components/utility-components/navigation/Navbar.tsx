// components/Navbar.tsx
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gray-700 dark:text-gray-200"
        >
          <Image
            src="/surge-bolt-logo.jpg"
            width={60}
            height={60}
            alt="app logo"
            className="rounded border-b-[0.02px] border-gray-700"
          />
        </Link>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 text-gray-700 dark:text-gray-200 rounded-lg md:hidden hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/feed">Feed</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/sign-in">Sign-in</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-900 shadow-md">
          <div className="flex flex-col space-y-4 py-4 px-4">
            <Link
              href="/feed"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Feed
            </Link>
            <Link
              href="/profile"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Profile
            </Link>
            <Link
              href="/sign-in"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition"
            >
              Sign-in
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
