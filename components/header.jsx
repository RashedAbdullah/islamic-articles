import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import Navigations from "./navigations";
import { ThemeSwitcher } from "./theme-switcher";
import { SearchIcon } from "lucide-react";
import { MdOutlineManageSearch } from "react-icons/md";

export default function Header() {
  return (
    <header className="bg-teal-100 dark:bg-teal-900 dark:text-teal-100 text-teal-900 py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} alt="Ummah logo" className="w-32 object-cover" />
        </Link>
        <Navigations />
        <div className="flex justify-center items-center gap-2">
          <MdOutlineManageSearch size={30} />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
