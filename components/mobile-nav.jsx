import React from "react";
import { FaHome, FaSearch, FaPlusCircle, FaBell, FaUser } from "react-icons/fa";
import Link from "next/link";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 z-50 left-0 w-full bg-white shadow-md border-t border-gray-200 md:hidden flex justify-between px-5 py-2 text-gray-600">
      <Link href="/" className="flex flex-col items-center text-sm">
        <FaHome className="text-xl" />
        <span>হোম</span>
      </Link>
      <Link href="/search" className="flex flex-col items-center text-sm">
        <FaSearch className="text-xl" />
        <span>অনুসন্ধান</span>
      </Link>
      <Link href="/create" className="flex flex-col items-center text-sm">
        <FaPlusCircle className="text-xl" />
        <span>তৈরি করুন</span>
      </Link>
      <Link
        href="/notifications"
        className="flex flex-col items-center text-sm"
      >
        <FaBell className="text-xl" />
        <span>বিজ্ঞপ্তি</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center text-sm">
        <FaUser className="text-xl" />
        <span>প্রোফাইল</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
