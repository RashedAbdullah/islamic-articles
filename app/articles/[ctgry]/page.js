import ArticleCard from "@/components/article-card";
import Categories from "@/components/categories";
import React from "react";

// ডেমো নিবন্ধের ডেটা
const articles = [
  {
    id: 1,
    title: "ইসলামের অর্থনৈতিক দৃষ্টিভঙ্গি",
    description:
      "ইসলামী অর্থনীতি কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়।",
    category: "অর্থনীতি",
    author: "রাশেদ আব্দুল্লাহ",
    publishedAt: "২০২৪-১১-০৮",
  },
  {
    id: 2,
    title: "ইসলামে শিক্ষা",
    description: "শিক্ষা ইসলামের একটি গুরুত্বপূর্ণ অংশ।",
    category: "শিক্ষা",
    author: "মাহমুদ হাসান",
    publishedAt: "২০২৪-১১-০৭",
  },
  {
    id: 3,
    title: "ইসলামী পরিবেশ",
    description: "পরিবেশ রক্ষা ইসলামের একটি গুরুত্বপূর্ণ দায়িত্ব।",
    category: "পরিবেশ",
    author: "রাশেদ আব্দুল্লাহ",
    publishedAt: "২০২৪-১১-০৫",
  },
];

// ফিল্টার করা নিবন্ধগুলো প্রদর্শন করার জন্য কম্পোনেন্ট
const ArticleByCategoryPage = ({ selectedCategory = "অর্থনীতি" }) => {
  const filteredArticles = articles.filter(
    (article) => article.category === selectedCategory
  );

  return (
    <div className="container px-4 py-8 lg:grid grid-cols-12 min-h-screen">
      <div className="col-span-10">
        <h1 className="text-3xl font-bold mb-6">
          {selectedCategory} ক্যাটাগরির নিবন্ধসমূহ
        </h1>

        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-center text-red-500">কোনো নিবন্ধ পাওয়া যায়নি।</p>
        )}
      </div>
      <Categories />
    </div>
  );
};

export default ArticleByCategoryPage;
