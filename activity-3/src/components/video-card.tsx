import { Card } from "./ui/card";
import { YouTubeVideo } from "@/types/youtube";
import Image from "next/image";
import { useFavouritesStore } from "@/stores/favourites";
import { Star } from "lucide-react";

export default function VideoCard({ video }: { video: YouTubeVideo }) {
  const { addFavorite, isFavorite, removeFavorite } = useFavouritesStore();

  return (
    <Card key={video.id.videoId}>
      <div className="flex flex-row gap-2">
        <div>
          <Image
            src={video.snippet.thumbnails.high.url}
            alt={video.snippet.title}
            height={300}
            width={400}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{video.snippet.title}</h3>
          <p className="text-sm text-gray-500">{video.snippet.description}</p>

          {isFavorite(video.id.videoId) ? (
            <Star
              className="text-yellow-500 hover:cursor-pointer hover:text-yellow-600"
              fill="currentColor"
              onClick={() => removeFavorite(video.id.videoId)}
            />
          ) : (
            <Star
              className="hover:cursor-pointer hover:text-yellow-600"
              onClick={() => addFavorite(video)}
            />
          )}
        </div>
      </div>
    </Card>
  );
}
