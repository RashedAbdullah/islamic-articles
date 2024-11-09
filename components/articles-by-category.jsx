import React from "react";
import ArticleCard from "./article-card";
import Link from "next/link";

// Example articles data. Ideally, fetch this data based on the category from a database or API.
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

// Filtered articles based on the selected category
const ArticlesByCategory = ({ selectedCategory = "অর্থনীতি" }) => {
  const filteredArticles = articles.filter(
    (article) => article.category === selectedCategory
  );

  return (
    <div className="px-4 col-span-3">
      <h1 className="text-3xl font-bold my-6 dark:text-teal-100 text-teal-900">{selectedCategory}</h1>

      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white dark:bg-teal-900 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-teal-50">
                  {article.title}
                </h2>
                {/* Author and Date under title */}
                <div className="text-sm text-gray-500 dark:text-teal-100 mb-4">
                  <span>লেখক: {article.author}</span> |{" "}
                  <span>প্রকাশিত: {article.publishedAt}</span>
                </div>
                <p className="text-gray-700 dark:text-white mb-4">
                  {article.description}
                </p>

                {/* Link to details page in Bangla */}
                <Link
                  href={`/articles/${article.id}`}
                  className="text-teal-600 dark:text-teal-200 hover:underline"
                >
                  বিস্তারিত পড়ুন
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500">কোনো নিবন্ধ পাওয়া যায়নি।</p>
      )}
    </div>
  );
};

export default ArticlesByCategory;
