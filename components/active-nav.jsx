"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveNav = ({ children, href }) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`hover:text-teal-600 transition-all duration-300 ${
        path === href && "dark:text-white text-black"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveNav;
