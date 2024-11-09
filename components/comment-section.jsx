"use client";

import React from "react";
import { useState } from "react";

// Example comments data
const initialComments = [
  {
    id: 1,
    user: "মাহমুদ হাসান",
    comment: "খুবই উপকারী নিবন্ধ। ধন্যবাদ!",
    date: "২০২৪-১১-০৮",
  },
  {
    id: 2,
    user: "তাহমিনা আক্তার",
    comment: "ইসলামের অর্থনৈতিক ব্যবস্থা সত্যিই সুন্দর।",
    date: "২০২৪-১১-০৮",
  },
];

const CommentSection = () => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const newCommentData = {
        id: comments.length + 1,
        user: "নতুন ব্যবহারকারী", // ভবিষ্যতে নাম ডাইনামিক করা যেতে পারে
        comment: newComment,
        date: "২০২৪-১১-০৯", // বর্তমান তারিখ ব্যবহার করুন
      };
      setComments([newCommentData, ...comments]);
      setNewComment("");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden mt-8 p-6">
      <h2 className="text-2xl font-bold mb-4">মন্তব্য</h2>

      {/* Comment Input Form */}
      <form onSubmit={handleCommentSubmit} className="mb-6">
        <textarea
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          placeholder="আপনার মন্তব্য লিখুন..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows="3"
          required
        ></textarea>
        <button
          type="submit"
          className="mt-3 bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700"
        >
          মন্তব্য পাঠান
        </button>
      </form>

      {/* Display Comments */}
      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-300 pb-4 mb-4">
            <div className="flex items-center mb-1">
              <p className="font-bold text-teal-700 mr-2">{comment.user}</p>
              <span className="text-gray-500 text-sm">{comment.date}</span>
            </div>
            <p className="text-gray-700">{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
