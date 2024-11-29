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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
          <DialogDescription>{video.snippet.description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <iframe
            width="100%"
            height="315"
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
