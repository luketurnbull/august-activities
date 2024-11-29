import { YouTubeVideo } from "@/types/youtube";

interface YouTubeResponse {
  items: YouTubeVideo[];
  nextPageToken?: string;
}

const MAX_RESULTS = 12;

export const fetchYouTubeVideos = async (
  searchTerm: string,
  pageToken: string = ""
): Promise<YouTubeResponse> => {
  if (!searchTerm.trim()) return { items: [] };

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchTerm
      )}&type=video&key=${
        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      }&maxResults=${MAX_RESULTS}${pageToken ? `&pageToken=${pageToken}` : ""}`,
      {
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return {
      items: data.items,
      nextPageToken: data.nextPageToken,
    };
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return { items: [] };
  }
};
