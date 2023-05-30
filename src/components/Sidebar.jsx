import React, { useState } from "react";
import { folderData } from "../data";
import {
  FaCaretUp,
  FaCaretDown,
  FaFolderPlus,
  FaPlus,
  FaEllipsisV,
  FaArrowRight,
  FaTrash,
} from "react-icons/fa";
import { useStore } from "../store";
import { useClickAway } from "@uidotdev/usehooks";
import { v4 } from "uuid";
import PopupBtn from "./PopupBtn";

const Sidebar = () => {
  const { folders } = useStore();
  const rootFolders = folders.filter((e) => e.parentId == null);
  return (
    <div className="w-full h-full max-w-[300px] bg-gray-100 p-4">
      {rootFolders.map((e) => {
        return <CollectionTile data={e} />;
      })}
    </div>
  );
};

export default Sidebar;

const CollectionTile = ({ data, p = 2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [showAddPopup, setShowAddPopup] = useState(false);

  const [addMode, setAddMode] = useState("item");

  const [fileName, setFileName] = useState("");

  const { folders, setSelectedDoc, selectedDoc, addFolder, removeFolder } =
    useStore();

  const ref = useClickAway(() => {
    setShowAddPopup(false);
    setFileName("");
  });

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const selectEditor = () => {
    setSelectedDoc(data);
  };

  const children = folders.filter((e) => e.parentId === data.id);

  const isFolder = data.type === "collection";

  const handleAddItem = (parentId) => {
    addFolder({
      id: v4(),
      name: fileName,
      type: "item",
      content: null,
      isActive: false,
      parentId: parentId,
    });
  };

  const handleAddCollection = (parentId) => {
    addFolder({
      id: v4(),
      name: fileName,
      type: "collection",
      content: null,
      isActive: false,
      parentId: parentId,
    });
  };

  return (
    <div className="flex flex-col">
      <div
        className={`w-full hover:bg-zinc-300 hover:bg-opacity-20 flex  justify-between items-center  cursor-pointer relative ${
          selectedDoc &&
          selectedDoc.id === data.id &&
          "border-l-4 border-orange-400 bg-zinc-200"
        }`}
        style={{
          paddingLeft: `${p + 1}px`,
          paddingTop: "4px",
          paddingBottom: "4px",
        }}
      >
        <div
          onClick={isFolder ? toggleOpen : selectEditor}
          className="flex flex-row gap-2 items-center"
        >
          {isFolder && <span>{isOpen ? <FaCaretUp /> : <FaCaretDown />}</span>}
          <span className={`${!isFolder && "pl-4"}`}>{data.name}</span>
        </div>
        <div className="flex gap-4 text-gray-400">
          <button
            className=""
            onClick={() => {
              setAddMode("item");
              setShowAddPopup(true);
            }}
          >
            <FaPlus className=" text-xs" />
          </button>
          <button
            onClick={() => {
              setAddMode("collection");
              setShowAddPopup(true);
            }}
          >
            <FaFolderPlus className="text-xs" />
          </button>
          <PopupBtn buttonTile={<FaEllipsisV className="text-xs" />}>
            {(close) => {
              return (
                <button
                  onClick={() => {
                    removeFolder(data);
                    close();
                  }}
                  className="flex gap-2 justify-center items-center text-red-600 hover:text-white hover:bg-red-600 px-2 py-1"
                >
                  Remove <FaTrash />{" "}
                </button>
              );
            }}
          </PopupBtn>
        </div>
        {showAddPopup && (
          <div
            ref={ref}
            className="absolute z-[20] top-10 left-10 w-full border border-gray-300 max-w-sm bg-white shadow-xl drop-shadow-lg "
          >
            <div className="flex justify-center items-center">
              <input
                className="w-full px-2 py-1 outline-none focus:outline-none"
                placeholder="Untitled"
                value={fileName}
                onChange={(e) => {
                  setFileName(e.target.value);
                }}
              />
              <button
                onClick={() => {
                  if (addMode === "item") {
                    handleAddItem(data.id);
                  } else {
                    handleAddCollection(data.id);
                  }
                  setShowAddPopup(false);
                }}
                className="hover:bg-gray-100 h-full w-full max-h-[30px] max-w-[30px] aspect-square flex justify-center items-center "
              >
                <FaArrowRight className="text-gray-400 text-sm " />
              </button>
            </div>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="">
          {isFolder &&
            children.map((e) => (
              <CollectionTile key={e.id} data={e} p={p + 8} />
            ))}
        </div>
      )}
    </div>
  );
};
