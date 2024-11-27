import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { YouTubeVideo } from "@/types/youtube";
import Image from "next/image";

export default function VideoCard({ video }: { video: YouTubeVideo }) {
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
          <Button>Add to favourites</Button>
        </div>
      </div>
    </Card>
  );
}
