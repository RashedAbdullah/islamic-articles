"use client";

import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

const AddArticleForm = () => {
  return <div>AddArticleForm</div>;
};

export default AddArticleForm;
