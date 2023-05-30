import { create } from "zustand";
import { folderData } from "./data";

export const useStore = create((set) => ({
  folders: folderData,
  addFolder: (folder) =>
    set((state) => ({ folders: [...state.folders, folder] })),
  removeFolder: (folder) =>
    set((state) => ({
      folders: state.folders.filter((e) => e.id !== folder.id),
    })),
  selectedDoc: null,
  setSelectedDoc: (doc) => set(() => ({ selectedDoc: doc })),
  updateFolders: (folders) => set(() => ({ folders: folders })),
}));
