const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* পেজ হেডার */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-800 mb-2">
          আমাদের সম্পর্কে
        </h1>
        <p className="text-lg text-gray-700">
          উম্মাহ ভয়েস - ইসলামের আলোকে জীবনধারা ও সমাধানের একটি প্ল্যাটফর্ম
        </p>
      </header>

      {/* মেইন কনটেন্ট */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          আমাদের উদ্দেশ্য
        </h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          উম্মাহ ভয়েস একটি ইসলামিক জীবনধারা প্রচার ও সমাধানমূলক প্ল্যাটফর্ম যা
          মূলত ইসলামের শিক্ষা ও নৈতিকতা নিয়ে আলোচনা করে। আমাদের লক্ষ্য হল
          মুসলিম সমাজকে ইসলামিক মূল্যবোধে উদ্বুদ্ধ করা এবং তাদের জীবনে
          প্রয়োজনীয় গাইডলাইন প্রদান করা।
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">আমাদের সেবা</h2>
        <ul className="list-disc list-inside text-gray-600 mb-4">
          <li>ইসলামিক প্রবন্ধ ও রিসোর্স প্রদান</li>
          <li>কুরআন ও হাদিসের আলোকে নৈতিক শিক্ষা প্রচার</li>
          <li>মুসলিম যুবকদের উন্নয়নে সহায়ক তথ্য ও ভিডিও কন্টেন্ট</li>
          <li>ধর্মীয় ও সামাজিক সচেতনতা বৃদ্ধি</li>
        </ul>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">যোগাযোগ করুন</h2>
        <p className="text-gray-600 leading-relaxed">
          আমাদের সাথে যোগাযোগ করতে বা আপনার মতামত জানাতে, নিচের যোগাযোগের
          ঠিকানায় ইমেইল করুন। আমরা আপনার প্রশ্ন ও পরামর্শকে সর্বোচ্চ গুরুত্ব দেই
          এবং দ্রুত উত্তর দেওয়ার চেষ্টা করি।
        </p>
        <p className="text-gray-600 mt-2">
          ইমেইল:{" "}
          <a
            href="mailto:support@ummahvoice.com"
            className="text-teal-600 hover:underline"
          >
            support@ummahvoice.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
