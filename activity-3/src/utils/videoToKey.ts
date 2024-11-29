import { YouTubeVideo } from "@/types/youtube";

export const videoToKey = (video: YouTubeVideo) => {
  return `vid-${video.id.videoId}-${video.snippet.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .slice(0, 10)}`;
};
