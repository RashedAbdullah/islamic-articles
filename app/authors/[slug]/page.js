import React from "react";
import Link from "next/link";
import ArticleCard from "@/components/article-card";
import AuthorsList from "@/components/authors-list";

const authors = [
  {
    id: 1,
    name: "রাশেদ আব্দুল্লাহ",
    profession: "লেখক ও শিক্ষক",
    articles: [
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
    ],
  },
  {
    id: 2,
    name: "মুহাম্মদ আলী",
    profession: "ইসলামী চিন্তাবিদ",
    articles: [
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
    ],
  },
];

const SingleAuthorPage = ({ params: { slug } }) => {
  // লেখক খুঁজে বের করা
  const author = authors.find((author) => author.id.toString() === slug);

  // লেখক না পাওয়া গেলে এরর হ্যান্ডলিং
  if (!author) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          লেখক পাওয়া যায়নি
        </h2>
        <p className="text-gray-700">
          দুঃখিত, আপনার অনুরোধকৃত লেখক পাওয়া যায়নি।
        </p>
        <Link
          href="/authors"
          className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200"
        >
          সমস্ত লেখক দেখুন
        </Link>
      </div>
    );
  }

  return (
    <div className="lg:grid grid-cols-12 container py-8 gap-5 min-h-screen">
      <div className="col-span-10">
        <div>
          <div className="text-center">
            <h1 className="md:text-4xl text-3xl font-bold dark:text-teal-100 text-teal-900 mb-2">
              {author.name}
            </h1>
            <p className="text-lg text-gray-600 my-6">{author.profession}</p>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            প্রবন্ধসমূহ:
          </h2>
          {author.articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 lg:gap-x-5">
              {author.articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">এই লেখকের কোন নিবন্ধ পাওয়া যায়নি।</p>
          )}
        </div>
      </div>
      <AuthorsList />
    </div>
  );
};

export default SingleAuthorPage;
