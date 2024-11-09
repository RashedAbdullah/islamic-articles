"use client";
import React, { useState } from "react";
import { Editor, EditorState } from "draft-js";


const AddArticleForm = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");  // Assuming this will come from a logged-in user or a selection
  const [categories, setCategories] = useState([]); // You can use a multi-select for categories
  const [coverImage, setCoverImage] = useState(""); // Handle cover image upload here

  const handleEditorChange = (state) => {
    setEditorState(state);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const content = editorState.getCurrentContent();
    const contentState = content.getPlainText(); // Get plain text or serialize as needed

    const articleData = {
      title,
      description,
      content: contentState, // Send the plain text or convert to HTML if needed
      author,
      categories,
      coverImage,
    };

    // Make API call here to submit article data
    console.log(articleData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-semibold">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-semibold">
          Content
        </label>
        <div className="border rounded-md p-2">
          <Editor
            editorState={editorState}
            onChange={handleEditorChange}
            placeholder="Start writing your article..."
          />
        </div>
      </div>

      {/* Other fields like categories, cover image, etc. */}
      <div>
        <label htmlFor="author" className="block text-sm font-semibold">
          Author
        </label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <div>
        <label htmlFor="coverImage" className="block text-sm font-semibold">
          Cover Image URL
        </label>
        <input
          type="text"
          id="coverImage"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          className="w-full border rounded-md p-2"
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default AddArticleForm;
