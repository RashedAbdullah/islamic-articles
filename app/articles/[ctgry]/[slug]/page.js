import React from "react";
import Image from "next/image";
import CommentSection from "@/components/comment-section";
import ArticlesByCategory from "@/components/articles-by-category";
import ShareSection from "@/components/share-section";

// Example articles data for demonstration. In a real app, fetch this from a database or API.
const article = {
  id: 1,
  title: "ইসলামের অর্থনৈতিক দৃষ্টিভঙ্গি",
  description:
    "ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়। ইসলামী অর্থনীতি মানুষের কল্যাণ ও ন্যায়বিচারকে সর্বাধিক গুরুত্ব দেয়।",
  author: "রাশেদ আব্দুল্লাহ",
  publishedAt: "২০২৪-১১-০৮",
  coverImage:
    "https://i.ibb.co.com/ncLKb5m/DALL-E-2024-11-03-21-52-28-A-serene-Islamic-blog-image-featuring-a-beautiful-open-Quran-with-elegant.webp",
  category: "অর্থনীতি",
};

const SingleArticlePage = () => {
  if (!article) {
    return (
      <div className="text-center py-10 text-red-600">
        কোনো নিবন্ধ পাওয়া যায়নি।
      </div>
    );
  }

  return (
    <div className="container lg:grid grid-cols-12 px-4 py-8">
      <div className="col-span-9">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            {/* Article Cover Image */}
            <Image
              height={600}
              width={800}
              src={article.coverImage}
              alt={article.title}
              className="w-full h-80 object-cover"
            />

            {/* Overlay with Title, Author, and Date */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-6">
              <div className="text-sm text-teal-200 mb-1">
                {article.category}
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">
                {article.title}
              </h1>
              <div className="text-sm text-gray-300">
                লেখক: {article.author} | প্রকাশিত: {article.publishedAt}
              </div>
            </div>
          </div>

          <div className="p-6">
            <p className="text-gray-700 text-lg">{article.description}</p>
          </div>

          <ShareSection />
        </div>
        <CommentSection />
      </div>
      <ArticlesByCategory />
    </div>
  );
};

export default SingleArticlePage;
