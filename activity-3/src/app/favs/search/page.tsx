"use client";

import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
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
    <>
      <Header title="Search" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <ScrollArea className="h-[calc(100vh-10rem)]">
          <div className="sticky top-0 p-4 bg-white">
            <Input
              placeholder="Search for new favs"
              defaultValue={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="container mx-auto px-6 py-8">
            {isLoading && <div>Loading...</div>}
            <div className="flex flex-col gap-4">
              {data?.map((video: YouTubeVideo) => {
                return <VideoCard key={video.id.videoId} video={video} />;
              })}
            </div>
          </div>
        </ScrollArea>
      </main>
    </>
  );
}
