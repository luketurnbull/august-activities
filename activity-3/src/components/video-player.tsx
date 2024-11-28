import { YouTubeVideo } from "@/types/youtube";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

export default function VideoPlayer({ video }: { video: YouTubeVideo }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Play</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{video.snippet.title}</DialogTitle>
        </DialogHeader>
        <div className="w-full h-full">
          <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
