import Link from "next/link";
import React from "react";
import {
  FaRegEdit,
  FaPlusCircle,
  FaTrashAlt,
  FaChartPie,
} from "react-icons/fa";

const DashboardPage = async () => {
  const stats = {
    articles: 20,
    categories: 5,
    views: 1500,
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* Dashboard Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-800 mb-2">ড্যাশবোর্ড</h1>
        <p className="text-lg text-gray-700">
          উম্মাহ ভয়েস - ইসলামিক জীবনধারা ও সমাধানের ব্লগ পরিচালনা করুন
        </p>
      </header>

      {/* Statistics Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-teal-100 p-6 rounded-lg text-center shadow">
          <FaChartPie className="text-teal-600 mx-auto text-3xl" />
          <h2 className="text-2xl font-bold">{stats.articles}</h2>
          <p className="text-gray-600">মোট প্রবন্ধ</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg text-center shadow">
          <FaChartPie className="text-blue-600 mx-auto text-3xl" />
          <h2 className="text-2xl font-bold">{stats.categories}</h2>
          <p className="text-gray-600">বিভাগসমূহ</p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg text-center shadow">
          <FaChartPie className="text-yellow-600 mx-auto text-3xl" />
          <h2 className="text-2xl font-bold">{stats.views}</h2>
          <p className="text-gray-600">মোট ভিউস</p>
        </div>
      </section>

      {/* Actions Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">দ্রুত পদক্ষেপ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Link
            href="/dashboard/add-article"
            className="flex items-center justify-center p-4 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600"
          >
            <FaPlusCircle className="mr-2" />
            নতুন প্রবন্ধ যোগ করুন
          </Link>
          <button className="flex items-center justify-center p-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            <FaRegEdit className="mr-2" />
            প্রবন্ধ সম্পাদনা করুন
          </button>
          <button className="flex items-center justify-center p-4 bg-red-500 text-white rounded-lg shadow hover:bg-red-600">
            <FaTrashAlt className="mr-2" />
            প্রবন্ধ মুছে ফেলুন
          </button>
        </div>
      </section>

      {/* Article Management Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">প্রবন্ধসমূহ</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="p-2 text-gray-600 font-medium">
                  প্রবন্ধের শিরোনাম
                </th>
                <th className="p-2 text-gray-600 font-medium">লেখক</th>
                <th className="p-2 text-gray-600 font-medium">
                  প্রকাশের তারিখ
                </th>
                <th className="p-2 text-gray-600 font-medium text-center">
                  পদক্ষেপ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-2">ইসলামিক অর্থনীতি</td>
                <td className="p-2">রাশেদ আব্দুল্লাহ</td>
                <td className="p-2">২০২৪-১১-০৮</td>
                <td className="p-2 text-center">
                  <button className="text-blue-600 hover:text-blue-800 mx-1">
                    সম্পাদনা
                  </button>
                  <button className="text-red-600 hover:text-red-800 mx-1">
                    মুছে ফেলুন
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
