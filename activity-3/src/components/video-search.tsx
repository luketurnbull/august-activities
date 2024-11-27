"use client";

import { useState } from "react";
import { YouTubeVideo } from "@/types/youtube";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { useQuery } from "react-query";
import { Input } from "./ui/input";
import { ScrollArea } from "./ui/scroll-area";

export default function VideoSearch() {
  const [inputValue, setInputValue] = useState("surfing");

  const { data, isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["youtubeVideos", inputValue],
    queryFn: () => fetchYouTubeVideos(inputValue),
    enabled: !!inputValue,
  });

  return (
    <div>
      <div className="flex gap-2">
        <Input
          placeholder="Search for videos"
          defaultValue={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <ScrollArea className="h-[calc(100vh-10rem)]">
        {isLoading && <div>Loading...</div>}
        {data && (
          <pre>{data.map((video) => video.snippet.title).join("\n")}</pre>
        )}
      </ScrollArea>
    </div>
  );
}
