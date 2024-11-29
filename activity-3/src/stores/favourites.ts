import { YouTubeVideo } from "@/types/youtube";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

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
          toast.success(`Added "${video.snippet.title}" to your favs!`);
          return {
            favorites: [...state.favorites, video],
          };
        }),

      removeFavorite: (id) =>
        set((state) => {
          const video = state.favorites.find(
            (video) => video.id.videoId === id
          );
          toast.info(`Removed "${video?.snippet.title}" from your favs!`);
          return {
            favorites: state.favorites.filter(
              (video) => video.id.videoId !== id
            ),
          };
        }),
    }),
    {
      name: "favourites-storage",
    }
  )
);
