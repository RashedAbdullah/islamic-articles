import { FaAngleRight } from "react-icons/fa6";
import Link from "next/link";
import ArticleCard from "@/components/article-card";

const articles = [
  {
    id: 1,
    title: "ইসলামের অর্থনৈতিক দৃষ্টিভঙ্গি",
    description:
      "ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়।",
    author: "রাশেদ আব্দুল্লাহ",
    publishedAt: "২০২৪-১১-০৮",
    coverImage: "/path/to/cover-image-1.jpg",
    category: "অর্থনীতি",
  },
  {
    id: 2,
    title: "ইসলামিক জীবনধারা: সাফল্যের দিশা",
    description:
      "ইসলামী জীবনধারা মানুষের নৈতিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখে।",
    author: "মোহাম্মদ হানিফ",
    publishedAt: "২০২৪-১০-১৫",
    coverImage: "/path/to/cover-image-2.jpg",
    category: "জীবনধারা",
  },
  {
    id: 3,
    title: "ইসলামের অর্থনৈতিক দৃষ্টিভঙ্গি",
    description:
      "ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়।",
    author: "রাশেদ আব্দুল্লাহ",
    publishedAt: "২০২৪-১১-০৮",
    coverImage: "/path/to/cover-image-1.jpg",
    category: "অর্থনীতি",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* হোম পেজের হেডিং */}
      <header className="text-center bg-teal-100 dark:bg-teal-900 py-20 rounded-md">
        <h1 className="text-4xl md:text-6xl font-bold text-teal-800 dark:text-teal-100">
          উম্মাহ ভয়েস
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mt-2 dark:text-white">
          ইসলামী জীবনধারা ও বিভিন্ন সমস্যা ও সমাধানের ব্লগ
        </p>
      </header>

      {/* সাম্প্রতিক প্রবন্ধ */}
      <section className="space-y-6">
        <div className="border-b-2 pb-1 border-teal-400 text-teal-800 dark:text-tel dark:text-teal-100 flex justify-between items-center">
          <h3 className="text-2xl font-bold">সাম্প্রতিক প্রবন্ধ</h3>
          <Link
            href="/articles"
            className="text-lg underline flex justify-center items-center gap-1"
          >
            আরও পড়ুন <FaAngleRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* সাম্প্রতিক প্রবন্ধ */}
      <section className="space-y-6">
        <div className="border-b-2 pb-1 border-teal-400 dark:text-teal-100 text-teal-800 flex justify-between items-center">
          <h3 className="text-2xl font-bold">অর্থনীতি</h3>
          <Link
            href="/articles"
            className="text-lg underline flex justify-center items-center gap-1"
          >
            আরও পড়ুন <FaAngleRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* সাম্প্রতিক প্রবন্ধ */}
      <section className="space-y-6">
        <div className="border-b-2 pb-1 border-teal-400 dark:text-teal-100 text-teal-800 flex justify-between items-center">
          <h3 className="text-2xl font-bold">যাকাত</h3>
          <Link
            href="/articles"
            className="text-lg underline flex justify-center items-center gap-1"
          >
            আরও পড়ুন <FaAngleRight />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ফিচারড পোস্ট */}
      <section className="bg-teal-100 dark:bg-teal-900 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-100 mb-4">
          ফিচারড প্রবন্ধ
        </h3>
        <div className="flex flex-col lg:flex-row gap-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="ফিচারড প্রবন্ধ"
            className="rounded-lg shadow-md w-full lg:w-1/2"
          />
          <div className="flex-1">
            <h4 className="text-xl font-semibold text-teal-700 dark:text-teal-50">
              ইসলামী শিক্ষা: নতুন প্রজন্মের জন্য একটি গুরুত্বপূর্ণ দিক
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              বর্তমান প্রজন্মের জন্য ইসলামী শিক্ষার গুরুত্ব এবং এর ভবিষ্যৎ দিক
              নিয়ে বিশদ আলোচনা।
            </p>
            <button className="mt-4 text-teal-600 dark:text-teal-400 hover:underline">
              বিস্তারিত পড়ুন
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
