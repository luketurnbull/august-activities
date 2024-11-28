"use client";

import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import { YouTubeVideo } from "@/types/youtube";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const SEARCH_DEBOUNCE_TIME = 500;

export default function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue);
    }, SEARCH_DEBOUNCE_TIME);

    return () => clearTimeout(timer);
  }, [inputValue]);

  const { data, isLoading } = useQuery<YouTubeVideo[]>({
    queryKey: ["youtubeVideos", debouncedValue],
    queryFn: () => fetchYouTubeVideos(debouncedValue),
    enabled: debouncedValue.length >= 3,
  });

  return (
    <>
      <Header title="Search" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <ScrollArea className="h-full">
          <div className="sticky top-0 p-4 bg-white">
            <Input
              placeholder="Search for new favs"
              defaultValue={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>
          <div className="container mx-auto px-6 py-8">
            {isLoading && (
              <div className="flex justify-center items-center h-full">
                <Loader2 className="w-10 h-10 animate-spin" />
              </div>
            )}
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
