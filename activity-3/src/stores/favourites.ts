import { YouTubeVideo } from "@/types/youtube";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavouritesStore {
  favorites: YouTubeVideo[];
  addFavorite: (video: YouTubeVideo) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useFavouritesStore = create<FavouritesStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      isFavorite: (id) => {
        return get().favorites.some((video) => video.id.videoId === id);
      },

      addFavorite: (video) =>
        set((state) => {
          if (get().isFavorite(video.id.videoId)) return state;
          return {
            favorites: [...state.favorites, video],
          };
        }),

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
