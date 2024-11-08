import Link from "next/link";
import React from "react";

const Navigations = () => {
  return (
    <nav className="space-x-4 hidden md:inline-block">
      <Link
        href="/"
        className="hover:text-teal-600 transition-all duration-300"
      >
        হোম
      </Link>
      <Link
        href="/about"
        className="hover:text-teal-600 transition-all duration-300"
      >
        আমাদের সম্পর্কে
      </Link>
      <Link
        href="/articles"
        className="hover:text-teal-600 transition-all duration-300"
      >
        আর্টিকেলস
      </Link>
      <Link
        href="/contact"
        className="hover:text-teal-600 transition-all duration-300"
      >
        যোগাযোগ
      </Link>
    </nav>
  );
};

export default Navigations;
