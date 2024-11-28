"use client";

import Header from "@/components/header";
import VideoCard from "@/components/video-card";
import { useFavouritesStore } from "@/stores/favourites";

export default function Favourites() {
  const { favorites } = useFavouritesStore();

  return (
    <>
      <Header title="Favourites" />
      <main className="flex-1 overflow-hidden bg-gray-100">
        <div className="flex flex-col gap-4">
          {favorites.map((video) => (
            <VideoCard key={video.id.videoId} video={video} />
          ))}
        </div>
      </main>
    </>
  );
}
