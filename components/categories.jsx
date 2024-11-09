import React from "react";
import Link from "next/link";

const categories = [
  { id: 1, name: "অর্থনীতি" },
  { id: 2, name: "শিক্ষা" },
  { id: 3, name: "পরিবেশ" },
  { id: 4, name: "স্বাস্থ্য" },
  { id: 5, name: "বিজ্ঞান ও প্রযুক্তি" },
];

const Categories = () => {
  return (
    <div className="container mx-auto px-4 col-span-2">
      <h1 className="text-3xl font-bold my-6 dark:text-teal-100 text-teal-900">সমস্ত ক্যাটাগরি</h1>
      <div className="">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/articles/${category.name}`}
            className="block bg-blue-100 text-blue-800 rounded-lg p-4 text-center hover:bg-blue-200 transition duration-200 mt-3"
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
