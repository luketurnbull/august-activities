import { useFavouritesStore } from "@/stores/favourites";
import { YouTubeVideo } from "@/types/youtube";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

export default function FavouriteButton({ video }: { video: YouTubeVideo }) {
  const { addFavorite, isFavorite, removeFavorite } = useFavouritesStore();

  if (isFavorite(video.id.videoId)) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="secondary"
            size="icon"
            className="hover:bg-secondary group"
          >
            <Star
              className="text-yellow-500 hover:cursor-pointer hover:text-yellow-600 group-hover:text-yellow-600"
              fill="currentColor"
            />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Remove this fav?</DialogTitle>
          </DialogHeader>
          <DialogDescription>{video.snippet.title}</DialogDescription>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary">Cancel</Button>
            </DialogClose>
            <Button
              variant="destructive"
              size="lg"
              onClick={() => removeFavorite(video.id.videoId)}
            >
              Remove
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
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
