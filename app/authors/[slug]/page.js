import React from "react";
import Link from "next/link";

// ডেমো লেখকের তালিকা ও তাদের নিবন্ধ
const authors = [
  {
    id: 1,
    name: "রাশেদ আব্দুল্লাহ",
    profession: "লেখক ও শিক্ষক",
    articles: [
      { id: 1, title: "ইসলামের অর্থনৈতিক দৃষ্টিভঙ্গি" },
      { id: 2, title: "মুসলিম সমাজের ভূমিকা" },
    ],
  },
  {
    id: 2,
    name: "মুহাম্মদ আলী",
    profession: "ইসলামী চিন্তাবিদ",
    articles: [
      { id: 3, title: "ইসলামে শিক্ষা ও জ্ঞান" },
      { id: 4, title: "অর্থনীতিতে ইসলামের মূলনীতি" },
    ],
  },
  // অন্যান্য লেখক যোগ করুন
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
        <Link href="/authors">
          <a className="mt-4 inline-block bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
            সমস্ত লেখক দেখুন
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="md:text-4xl text-3xl font-bold text-green-800 mb-2">
          {author.name}
        </h1>
        <p className="text-lg text-gray-600 mb-6 italic">{author.profession}</p>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          নিবন্ধসমূহ:
        </h2>
        {author.articles.length > 0 ? (
          <ul className="list-disc list-inside space-y-2">
            {author.articles.map((article) => (
              <li key={article.id}>
                <Link
                  href={`/article/${article.id}`}
                  className="text-blue-600 hover:underline"
                >
                  {article.title}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">এই লেখকের কোন নিবন্ধ পাওয়া যায়নি।</p>
        )}
      </div>
    </div>
  );
};

export default SingleAuthorPage;
