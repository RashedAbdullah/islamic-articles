import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleCard = ({ article }) => {
  return (
    <article
      key={article.id}
      className="bg-white dark:bg-teal-900 rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative">
        <Image
          height={400}
          width={400}
          src={
            "https://i.ibb.co.com/ncLKb5m/DALL-E-2024-11-03-21-52-28-A-serene-Islamic-blog-image-featuring-a-beautiful-open-Quran-with-elegant.webp"
          }
          alt={article.title}
          className="w-full h-48 object-cover"
        />
        {/* Category on cover image */}
        <div className="absolute top-3 left-3 bg-black dark:bg-gray-200 bg-opacity-60 text-white dark:text-teal-950 px-3 py-1 rounded-full text-sm">
          {article.category}
        </div>
      </div>
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
          href={`/articles/${article.id}/lskdjf`}
          className="text-teal-600 dark:text-teal-200 hover:underline"
        >
          বিস্তারিত পড়ুন
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
