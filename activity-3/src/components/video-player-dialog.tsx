import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { YouTubeVideo } from "@/types/youtube";

export default function VideoPlayerDialog({
  video,
  children,
}: {
  video: YouTubeVideo;
  children: React.ReactNode;
}) {
  return (
    <Dialog>
      <DialogTrigger className="hover:cursor-pointer hover:shadow-lg">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-none md:max-w-[90%]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
