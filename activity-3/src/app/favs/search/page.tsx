"use client";

import Header from "@/components/header";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import debounce from "debounce";
import { fetchYouTubeVideos } from "@/utils/fetchYouTubeVideos";
import { videoToKey } from "@/utils/videoToKey";
import { Loader2, Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useSearchStore } from "@/stores/search";

export default function Search() {
  const {
    searchTerm,
    setSearchTerm,
    inputValue,
    setInputValue,
    results,
    setResults,
    getAllVideos,
  } = useSearchStore();

  const [isFocused, setIsFocused] = useState(false);

  const { isLoading, isError, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["search", searchTerm],
      queryFn: async ({ pageParam = "" }) => {
        const results = await fetchYouTubeVideos(searchTerm, pageParam);
        return results;
      },
      getNextPageParam: (lastPage) => lastPage.nextPageToken,
      enabled: searchTerm.trim().length > 2,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      onSuccess: (data) => {
        setResults(data);
      },
      initialData: results,
    });

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const isNearBottom =
      target.scrollHeight - target.scrollTop - target.clientHeight < 50;

    if (isNearBottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  const debouncedSetSearchTerm = useState(() =>
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500)
  )[0];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSetSearchTerm(value);
  };

  const clearSearch = () => {
    setInputValue("");
    setSearchTerm("");
  };

  const allVideos = getAllVideos();

  return (
    <>
      <Header title="Search" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <ScrollArea onScrollCapture={handleScroll} className="h-full">
          <div className="sticky top-0 p-4 bg-white z-10 shadow-lg">
            <div className="flex flex-row gap-2 items-center">
              <div className="relative flex-1">
                <SearchIcon
                  className={`absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors ${
                    isFocused ? "text-primary" : "text-gray-400"
                  }`}
                />
                <Input
                  placeholder="Search for new favs"
                  onChange={handleSearchChange}
                  value={inputValue}
                  className="pl-12 pr-12"
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                />
                {inputValue && (
                  <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
          <div>
            {isError && (
              <div className="flex justify-center items-center h-full">
                <p>Error fetching search results</p>
              </div>
            )}
            <section className="flex flex-row flex-wrap gap-5 w-fullover flow-hidden max-w-full content-center justify-center p-6">
              {allVideos.map((video) => (
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
