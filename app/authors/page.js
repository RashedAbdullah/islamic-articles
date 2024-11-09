import React from "react";
import Link from "next/link";

// ডেমো লেখক এবং তাদের পেশার তালিকা
const authors = [
  { id: 1, name: "রাশেদ আব্দুল্লাহ", profession: "লেখক ও শিক্ষক" },
  { id: 2, name: "মাও. আলতাফ হোসাইন", profession: "ইসলামী চিন্তাবিদ" },
  { id: 3, name: "মাও. রাশেদুল ইসলাম", profession: "সাংবাদিক" },
  { id: 4, name: "হাসান ইব্রাহীম", profession: "গবেষক" },
];

const AuthorsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">সমস্ত লেখক</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/authors/${author.id}`}
            className="block bg-green-100 text-green-800 rounded-lg p-4 text-center hover:bg-green-200 transition duration-200"
          >
            <div className="text-lg font-semibold">{author.name}</div>
            <div className="text-sm text-gray-600">{author.profession}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;
