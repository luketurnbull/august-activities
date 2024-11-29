import { Card } from "./ui/card";
import { YouTubeVideo } from "@/types/youtube";
import Image from "next/image";
import VideoPlayerDialog from "./video-player-dialog";
import FavouriteButton from "./favourite-button";

export default function VideoCard({ video }: { video: YouTubeVideo }) {
  if (!video) return null;

  return (
    <Card
      className="
        h-[450px]
        w-[300px]
        flex
        md:odd:flex-grow-0
        sm:nth-child-3n:flex-grow-2
        sm:last:flex-grow-0
        relative"
    >
      <div className="absolute -top-2 -left-2">
        <FavouriteButton video={video} />
      </div>
      <VideoPlayerDialog video={video}>
        <div className="flex flex-col gap-2 overflow-hidden justify-start h-full">
          <div>
            <Image
              src={video.snippet.thumbnails.high.url}
              alt={video.snippet.title}
              height={250}
              width={300}
              className="rounded-t-md"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-2 p-2">
            <div className="flex flex-row justify-between">
              <h3 className="text-lg font-semibold">{video.snippet.title}</h3>
            </div>
            <p className="text-sm text-gray-500">{video.snippet.description}</p>
          </div>
        </div>
      </VideoPlayerDialog>
    </Card>
  );
}
