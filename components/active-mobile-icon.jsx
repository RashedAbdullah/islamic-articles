"use client";
import { FaHome, FaUser } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { BsExclamationSquareFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import Link from "next/link";

const ActiveMobileIcon = ({ children, href }) => {
  const path = usePathname();

  return (
    <Link
      href={href}
      className={`flex flex-col items-center text-sm ${
        href === path && "dark:text-white text-black"
      }`}
    >
     {children}
    </Link>
  );
};

export default ActiveMobileIcon;
