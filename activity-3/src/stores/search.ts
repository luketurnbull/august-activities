import { create } from "zustand";
import { YouTubeVideo } from "@/types/youtube";
import { InfiniteData } from "react-query";
import { videoToKey } from "@/utils/videoToKey";

type SearchResults = {
  items: YouTubeVideo[];
  nextPageToken?: string;
};

interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  results: InfiniteData<SearchResults> | undefined;
  setResults: (results: InfiniteData<SearchResults>) => void;
  clearResults: () => void;
  getAllVideos: () => YouTubeVideo[];
}

export const useSearchStore = create<SearchState>((set, get) => ({
  searchTerm: "",
  setSearchTerm: (term) => {
    if (term !== get().searchTerm) {
      set({ searchTerm: term, results: undefined });
    }
  },
  inputValue: "",
  setInputValue: (value) => set({ inputValue: value }),
  results: undefined,
  setResults: (results) => set({ results }),
  clearResults: () =>
    set({ results: undefined, searchTerm: "", inputValue: "" }),
  getAllVideos: () => {
    const results = get().results;
    if (!results?.pages) return [];

    const seenIds = new Set<string>();

    return results.pages
      .flatMap((page) => page.items)
      .filter((video) => {
        const videoKey = videoToKey(video);
        if (seenIds.has(videoKey)) {
          return false;
        }
        seenIds.add(videoKey);
        return true;
      });
  },
}));
