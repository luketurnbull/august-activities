import { YouTubeVideo } from "@/types/youtube";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesStore {
  favorites: YouTubeVideo[];
  addFavorite: (video: YouTubeVideo) => void;
  removeFavorite: (id: string) => void;
}

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set) => ({
      favorites: [],

      addFavorite: (video) =>
        set((state) => ({
          favorites: [...state.favorites, video],
        })),

      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((video) => video.id.videoId !== id),
        })),
    }),
    {
      name: "favourites-storage",
    }
  )
);
