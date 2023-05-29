import React, { useState } from "react";
import { folderData } from "../data";
import {
  FaCaretUp,
  FaCaretDown,
  FaFolderPlus,
  FaPlus,
  FaEllipsisV,
} from "react-icons/fa";
import { useStore } from "../store";

const Sidebar = () => {
  const { folders } = useStore();
  return (
    <div className="w-full h-full max-w-[300px] bg-gray-100 p-4">
      <CollectionTile data={folders.filter((e) => e.parentId == null)[0]} />
    </div>
  );
};

export default Sidebar;

const CollectionTile = ({ data, p = 2 }) => {
  const [isOpen, setIsOpen] = useState(false);

  const { folders, setSelectedDoc, selectedDoc } = useStore();

  const toggleOpen = () => {
    setIsOpen((open) => !open);
  };

  const selectEditor = () => {
    setSelectedDoc(data);
  };

  const children = folders.filter((e) => e.parentId === data.id);

  const isFolder = data.type === "collection";
  const handleAddItem = (parentId) => {};

  const handleAddCollection = (parentId) => {};
  return (
    <div className="flex flex-col">
      <div
        className={`w-full hover:bg-zinc-300 hover:bg-opacity-20 flex  justify-between items-center  cursor-pointer ${
          selectedDoc &&
          selectedDoc.id == data.id &&
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
        <div className="flex gap-2 text-gray-400">
          <button className="">
            <FaPlus className=" text-xs" />
          </button>
          <button>
            <FaFolderPlus className=" text-xs" />
          </button>
          <FaEllipsisV className=" text-xs" />
        </div>
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
