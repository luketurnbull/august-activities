"use client";

import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { YouTubeVideo } from "@/types/youtube";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Search() {
  const [inputValue, setInputValue] = useState<string>("");

  const { data, isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["youtubeVideos", inputValue],
    queryFn: () => fetchYouTubeVideos(inputValue),
    enabled: !!inputValue,
  });

  return (
    <div>
      <div className="flex gap-2">
        <Input
          placeholder="Search for new favs"
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
