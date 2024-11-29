import { useFavouritesStore } from "@/stores/favourites";
import { YouTubeVideo } from "@/types/youtube";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

export default function FavouriteButton({ video }: { video: YouTubeVideo }) {
  const { addFavorite, isFavorite, removeFavorite } = useFavouritesStore();

  if (isFavorite(video.id.videoId)) {
    return (
      <Button
        variant="secondary"
        size="icon"
        className="hover:bg-secondary group"
        onClick={(e) => {
          e.stopPropagation();
          removeFavorite(video.id.videoId);
        }}
      >
        <Star
          className="text-yellow-500 hover:cursor-pointer hover:text-yellow-600 group-hover:text-yellow-600"
          fill="currentColor"
        />
      </Button>
    );
  }

  return (
    <Button
      variant="secondary"
      size="icon"
      className="hover:bg-secondary group"
      onClick={(e) => {
        e.stopPropagation();
        addFavorite(video);
      }}
    >
      <Star className="hover:cursor-pointer hover:text-yellow-600 group-hover:text-yellow-600" />
    </Button>
  );
}
