"use client";

import { YouTubeVideo } from "@/types/youtube";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { useQuery } from "react-query";

export default function YtApiTest() {
  const { data, isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["youtubeVideos", "surfing"],
    queryFn: () => fetchYouTubeVideos("surfing"),
  });

  return (
    <div>
      <h1>YtApiTest</h1>
      <div>
        {isLoading && <div>Loading...</div>}

        {data && (
          <pre>{data.map((video) => video.snippet.title).join("\n")}</pre>
        )}
      </div>
    </div>
  );
}
