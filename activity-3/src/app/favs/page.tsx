"use client";

import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import { useFavouritesStore } from "@/stores/favourites";
import { videoToKey } from "@/utils/videoToKey";

export default function Favourites() {
  const { favorites } = useFavouritesStore();

  return (
    <>
      <Header title="Favourites" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <ScrollArea className="h-full">
          <div className="container mx-auto px-6 py-8">
            <section className="flex flex-row flex-wrap gap-5 w-fullover flow-hidden max-w-full content-center justify-center">
              {favorites.map((video) => (
                <VideoCard key={videoToKey(video)} video={video} />
              ))}
            </section>
          </div>
        </ScrollArea>
      </main>
    </>
  );
}
