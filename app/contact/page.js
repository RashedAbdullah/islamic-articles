const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      {/* পেজ হেডার */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-800 dark:text-teal-100 mb-2">
          যোগাযোগ করুন
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          আপনার প্রশ্ন বা মন্তব্য জানাতে আমাদের সাথে যোগাযোগ করুন
        </p>
      </header>

      {/* কন্ট্যাক্ট ফর্ম */}
      <section className="bg-white dark:bg-teal-800 p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              htmlFor="name"
            >
              আপনার নাম
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-950"
              placeholder="আপনার নাম লিখুন"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              htmlFor="email"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-950"
              placeholder="আপনার ইমেইল লিখুন"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 dark:text-gray-300 font-bold mb-2"
              htmlFor="message"
            >
              বার্তা
            </label>
            <textarea
              id="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-950"
              placeholder="আপনার বার্তা লিখুন"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-600 text-white font-bold py-2 rounded-lg hover:bg-teal-700"
          >
            বার্তা পাঠান
          </button>
        </form>
      </section>

      {/* কন্টাক্ট তথ্য */}
      <section className="text-center mt-8">
        <p className="text-gray-600">
          বিকল্প যোগাযোগ মাধ্যম: <br />
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

export default ContactPage;
