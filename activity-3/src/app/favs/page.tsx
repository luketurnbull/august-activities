"use client";

import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import { useFavouritesStore } from "@/stores/favourites";
import { videoToKey } from "@/utils/videoToKey";
import Link from "next/link";
import { useUserStore } from "@/stores/user";

export default function Favourites() {
  const { favorites } = useFavouritesStore();
  const { name } = useUserStore();

  return (
    <>
      <Header title={`${name}'s Favs`} />
      <main className="flex-1 overflow-hidden bg-gray-100">
        {favorites.length ? (
          <ScrollArea className="h-full">
            <div className="container mx-auto px-6 py-8">
              <section className="flex flex-row flex-wrap gap-5 w-fullover flow-hidden max-w-full content-center justify-center">
                {favorites.map((video) => (
                  <VideoCard key={videoToKey(video)} video={video} />
                ))}
              </section>
            </div>
          </ScrollArea>
        ) : (
          <div className="h-screen flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
              <h2 className="text-4xl font-bold">No favourites yet</h2>
              <p>
                Add some videos to your favourites by clicking the heart icon on
                any video.
              </p>
            </div>
            <Link href="/favs/search" passHref legacyBehavior>
              <Button size="lg">Search for videos</Button>
            </Link>
          </div>
        )}
      </main>
    </>
  );
}
