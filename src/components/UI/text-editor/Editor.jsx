import React, { useMemo } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import ImageUploader from "quill-image-uploader";
import ImageResize from "quill-image-resize-module-react";
import BlotFormatter from "quill-blot-formatter";

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/imageResize", ImageResize);
Quill.register("modules/blotFormatter", BlotFormatter);

const Editor = ({ value, setValue }) => {
  const imageUploader = async file => {
    const formData = new FormData();
    formData.append("image", file);

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_LINK}/api/data/upload-image`,
      {
        method: "POST",
        body: formData,
      },
    ).then(async res => res.json());

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(response.imgPath);
      }, 1000);
    });
  };

  const editor = useMemo(
    () => ({
      formats: [
        "header",
        "font",
        "size",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "video",
      ],
      modules: {
        toolbar: [
          [{ header: "1" }, { header: "2" }, { font: [] }],
          [{ size: [] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image", "video"],
          ["clean"],
        ],
        clipboard: {
          // Toggle to add extra line breaks when pasting HTML:
          matchVisual: false,
        },
        imageUploader: {
          upload: imageUploader,
        },
        imageResize: {
          parchment: Quill.import("parchment"),
          modules: ["Resize", "DisplaySize"],
        },
        blotFormatter: {},
      },
    }),
    [],
  );

  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={setValue}
      modules={editor.modules}
      formats={editor.formats}
    />
  );
};

export default Editor;
