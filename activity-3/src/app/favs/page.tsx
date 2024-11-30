"use client";

import Header from "@/components/header";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCard from "@/components/video-card";
import { useFavouritesStore } from "@/stores/favourites";
import { videoToKey } from "@/utils/videoToKey";
import { useRouter } from "next/navigation";
import { useUserStore } from "@/stores/user";
import CentredCard from "@/components/centred-card";
import { StarIcon } from "lucide-react";

export default function Favourites() {
  const { favorites } = useFavouritesStore();
  const { name } = useUserStore();
  const router = useRouter();

  return (
    <>
      <Header
        title={
          <span className="flex items-center gap-2">
            <StarIcon className="w-6 h-6 text-yellow-400 fill-current outline-black" />
            {name}&apos;s Favs
          </span>
        }
      />
      <main className="flex-1 overflow-hidden">
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
          <CentredCard
            title="No favourites yet"
            buttonText="Search for videos"
            onClick={() => router.push("/favs/search")}
          >
            <p className="text-center">
              Add some videos to your favourites by clicking the heart icon on
              any video.
            </p>
          </CentredCard>
        )}
      </main>
    </>
  );
}
