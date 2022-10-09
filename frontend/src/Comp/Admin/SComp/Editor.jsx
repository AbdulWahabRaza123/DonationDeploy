import React, { useRef } from "react";
import JoditEditor from "jodit-react";
const config = {
  buttons: [
    "|",
    "image",
    "bold",
    "italic",
    "underline",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "table",
    "link",
    "|",
    "left",
    "center",
    "right",
    "justify",
    "|",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
    "fullsize",
  ],
  theme: "dark",
  showXPathInStatusbar: false,
  showCharsCounter: false,
  showWordsCounter: false,
  toolbarAdaptive: true,
  toolbarSticky: true,
  removeButtons: ["brush", "file"],
  style: {
    background: "black",
    color: "white",
    borderRadius: "10px",
  },
};
const Editor = ({ setValue }) => {
  const editor = useRef(null);
  return (
    <>
      <JoditEditor
        className="bg-white"
        ref={editor}
        onChange={(content) => setValue(content)}
        config={config}
      />
    </>
  );
};

export default Editor;
