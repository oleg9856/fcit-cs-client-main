import React from "react";
import ReactQuill from "react-quill";

const EditorContent = ({ value }) => (
  <ReactQuill value={value} readOnly={true} theme={"bubble"}/>
);

export default EditorContent;
