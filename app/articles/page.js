import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from next/link
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
  {
    id: 4,
    title: "ইসলামিক জীবনধারা: সাফল্যের দিশা",
    description:
      "ইসলামী জীবনধারা মানুষের নৈতিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা রাখে।",
    author: "মোহাম্মদ হানিফ",
    publishedAt: "২০২৪-১০-১৫",
    coverImage: "/path/to/cover-image-2.jpg",
    category: "জীবনধারা",
  },
];

const ArticlesPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-800 mb-2">উম্মাহ ভয়েস</h1>
        <p className="text-lg text-gray-700">
          ইসলামী জীবনধারা ও বিভিন্ন সমস্যা ও সমাধানের ব্লগ
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ArticlesPage;
