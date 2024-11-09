import { FaHome, FaUser } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { FaFilePen } from "react-icons/fa6";
import { BsExclamationSquareFill } from "react-icons/bs";
import Link from "next/link";
import ActiveMobileIcon from "./active-mobile-icon";

const MobileNav = () => {
  return (
    <nav className="fixed bottom-0 z-50 left-0 w-full bg-white dark:bg-teal-950 dark:text-gray-400 shadow-md border-t border-gray-200 md:hidden flex justify-between px-5 py-2 text-gray-500">
      <ActiveMobileIcon href="/">
        <FaHome className="text-xl" />
        <span>হোম</span>
      </ActiveMobileIcon>
      <ActiveMobileIcon href="/articles" className="flex flex-col items-center text-sm">
        <MdArticle className="text-xl" />
        <span>প্রবন্ধ</span>
      </ActiveMobileIcon>
      <ActiveMobileIcon href="/authors" className="flex flex-col items-center text-sm">
        <FaFilePen className="text-xl" />
        <span>লেখকবৃন্দ</span>
      </ActiveMobileIcon>
      <ActiveMobileIcon href="/about" className="flex flex-col items-center text-sm">
        <BsExclamationSquareFill className="text-xl" />
        <span>সম্পর্কে</span>
      </ActiveMobileIcon>
      <ActiveMobileIcon href="/profile" className="flex flex-col items-center text-sm">
        <FaUser className="text-xl" />
        <span>প্রোফাইল</span>
      </ActiveMobileIcon>
    </nav>
  );
};

export default MobileNav;
