"use client";

import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import { YouTubeVideo } from "@/types/youtube";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { videoToKey } from "@/utils/videoToKey";
import { Loader2 } from "lucide-react";
import { useState, useMemo } from "react";
import { useInfiniteQuery } from "react-query";

function debounce<T extends (...args: Parameters<T>) => void>(
  func: T,
  delay: number
) {
  let timeoutId: NodeJS.Timeout | undefined;
  return (...args: Parameters<T>) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    data,
    isLoading,
    isError,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["search", searchTerm],
    queryFn: async ({ pageParam = "" }) => {
      const results = await fetchYouTubeVideos(searchTerm, pageParam);
      return results;
    },
    getNextPageParam: (lastPage) => lastPage.nextPageToken || undefined,
    enabled: searchTerm.trim().length > 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const isNearBottom =
      target.scrollHeight - target.scrollTop - target.clientHeight < 50;

    if (isNearBottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const debouncedSetSearchTerm = debounce((value: string) => {
    setSearchTerm(value);
  }, 500);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSetSearchTerm(value);
  };

  const allVideos = useMemo(() => {
    if (!data?.pages) return [];
    
    const seenIds = new Set<string>();
    
    return data.pages
      .flatMap((page) => page.items)
      .filter((video) => {
        const videoKey = videoToKey(video);
        if (seenIds.has(videoKey)) {
          return false;
        }
        seenIds.add(videoKey);
        return true;
      });
  }, [data?.pages]);

  return (
    <>
      <Header title="Search" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <ScrollArea onScrollCapture={handleScroll} className="h-full">
          <div className="sticky top-0 p-4 bg-white z-10">
            <Input
              placeholder="Search for new favs"
              onChange={handleSearchChange}
            />
          </div>
          <div>
            {isError && (
              <div className="flex justify-center items-center h-full">
                <p>Error fetching search results</p>
              </div>
            )}
            <section className="flex flex-row flex-wrap gap-5 w-fullover flow-hidden max-w-full content-center justify-center p-6">
              {allVideos.map((video: YouTubeVideo) => (
                <VideoCard key={videoToKey(video)} video={video} />
              ))}
            </section>

            <div className="flex justify-center items-center p-4">
              {(isFetchingNextPage || isLoading) && (
                <Loader2 className="w-6 h-6 animate-spin" />
              )}
            </div>
          </div>
        </ScrollArea>
      </main>
    </>
  );
}
