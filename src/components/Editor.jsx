import React from "react";
// import MediumEditor from "medium-editor";
import "medium-editor/dist/css/medium-editor.min.css";
import "medium-editor/dist/css/themes/default.min.css";
import "./Editor.css";

import Editor from "react-medium-editor";
import { useStore } from "../store";

const EditorPage = () => {
  //   const editor = new MediumEditor(".editable", {
  //     buttons: ["bold", "italic", "underline", "anchor", "h2", "h3", "quote"],
  //     spellcheck: true,
  //     placeholder: {
  //       text: "Type something...",
  //     },
  //   });
  const { folders, selectedDoc, setSelectedDoc, updateFolders } = useStore();
  const handleEditorChange = (value, medium) => {
    if (selectedDoc) {
      const updatedFolders = folders.map((e) => {
        if (e.id === selectedDoc.id) {
          const docData = {
            ...e,
            data: value,
          };
          setSelectedDoc(docData);
          return docData;
        }
        return e;
      });
      updateFolders(updatedFolders);
    }
  };
  return (
    <div className="w-full h-full box-border">
      <Editor
        className="editable w-full h-full focus:outline-none p-6"
        text={selectedDoc ? selectedDoc.data : "Type Something..."}
        options={{
          activeButtonClass: "text-orange-200",
          allowMultiParagraphSelection: true,
        }}
        onChange={handleEditorChange}
      />
      {/* <div className="editable h-full focus:outline-none p-4">Editor</div> */}
    </div>
  );
};

export default EditorPage;
