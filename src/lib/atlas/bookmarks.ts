import { create } from "zustand";
import { persist } from "zustand/middleware";

type BookmarksState = {
  ids: string[];
  toggle: (id: string) => void;
};

export const useBookmarks = create<BookmarksState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) => {
        const ids = get().ids;
        set({ ids: ids.includes(id) ? ids.filter((x) => x !== id) : [...ids, id] });
      },
    }),
    { name: "gza-bookmarks" },
  ),
);
