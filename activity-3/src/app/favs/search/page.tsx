"use client";

import VideoSearch from "@/components/video-search";

export default function Search() {
  return (
    <div className="flex flex-row gap-4">
      <div className="flex-1">
        <h1>Favourites</h1>
      </div>
      <div className="flex-1">
        <VideoSearch />
      </div>
    </div>
  );
}
