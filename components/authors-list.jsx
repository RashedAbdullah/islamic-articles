import Link from "next/link";

const authors = [
  { id: 1, name: "রাশেদ আব্দুল্লাহ", profession: "লেখক ও শিক্ষক" },
  { id: 2, name: "মাও. আলতাফ হোসাইন", profession: "ইসলামী চিন্তাবিদ" },
  { id: 3, name: "মাও. রাশেদুল ইসলাম", profession: "সাংবাদিক" },
  { id: 4, name: "হাসান ইব্রাহীম", profession: "গবেষক" },
];

const AuthorsList = () => {
  return (
    <div className="col-span-2">
      <h1 className="text-3xl font-bold my-6 dark:text-teal-100 text-teal-900"> অনান্য লেখকবৃন্দ</h1>
      <div>
        {authors.map((author) => (
          <Link
            key={author.id}
            href={`/authors/${author.id}`}
            className="block bg-teal-100 text-teal-800 rounded-lg p-4 text-center hover:bg-teal-200 transition duration-200 mt-3 shadow"
          >
            <div className="text-lg font-semibold">{author.name}</div>
            <div className="text-sm text-gray-600">{author.profession}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AuthorsList;
