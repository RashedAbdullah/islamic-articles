"use client";

import { useState } from "react";
import { FaCopy, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa6";

const ShareSection = () => {
  const [isCopied, setIsCopied] = useState(false);
  const currentURL = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentURL);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentURL
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      currentURL
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(currentURL)}`,
  };

  return (
    <div className="p-6 border-t border-gray-200 mt-4 text-end">
      <div className="flex items-center justify-end space-x-4">
        <a
          href={shareUrls.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href={shareUrls.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-700"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href={shareUrls.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:text-green-700"
        >
          <FaWhatsapp size={24} />
        </a>
        <button
          onClick={handleCopyUrl}
          className={`${
            isCopied ? "text-green-500" : "text-gray-600"
          } hover:text-gray-800`}
        >
          <FaCopy size={24} />
        </button>
      </div>
    </div>
  );
};

export default ShareSection;
