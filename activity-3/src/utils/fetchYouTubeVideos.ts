import { YouTubeApiResponse } from "@/types/youtube";

import { YouTubeVideo } from "@/types/youtube";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export const fetchYouTubeVideos = async (
  searchTerm: string
): Promise<YouTubeVideo[]> => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${searchTerm}&part=snippet&type=video&maxResults=10`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube videos");
    }

    const data: YouTubeApiResponse = await response.json();
    return data.items;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    throw error;
  }
};
