import { YouTubeApiResponse } from "@/types/youtube";

import { YouTubeVideo } from "@/types/youtube";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const mockVideos: YouTubeVideo[] = [
  {
    kind: "youtube#video",
    etag: "mockEtag1",
    id: { kind: "youtube#video", videoId: "mockVideoId1" },
    snippet: {
      title: "Mock Video Title 1",
      description: "Mock Video Description 1",
      publishedAt: "2024-01-01",
      channelId: "mockChannelId1",
      channelTitle: "Mock Channel Title 1",
      liveBroadcastContent: "none",
      publishTime: "2024-01-01",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/mockVideoId1/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mockVideoId1/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        default: {
          url: "https://i.ytimg.com/vi/mockVideoId1/default.jpg",
          width: 120,
          height: 90,
        },
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "mockEtag2",
    id: { kind: "youtube#video", videoId: "mockVideoId2" },
    snippet: {
      title: "Mock Video Title 2",
      description: "Mock Video Description 2",
      publishedAt: "2024-01-02",
      channelId: "mockChannelId2",
      channelTitle: "Mock Channel Title 2",
      liveBroadcastContent: "none",
      publishTime: "2024-01-02",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/mockVideoId2/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mockVideoId2/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        default: {
          url: "https://i.ytimg.com/vi/mockVideoId2/default.jpg",
          width: 120,
          height: 90,
        },
      },
    },
  },
  {
    kind: "youtube#video",
    etag: "mockEtag3",
    id: { kind: "youtube#video", videoId: "mockVideoId3" },
    snippet: {
      title: "Mock Video Title 3",
      description: "Mock Video Description 3",
      publishedAt: "2024-01-03",
      channelId: "mockChannelId3",
      channelTitle: "Mock Channel Title 3",
      liveBroadcastContent: "none",
      publishTime: "2024-01-03",
      thumbnails: {
        high: {
          url: "https://i.ytimg.com/vi/mockVideoId3/hqdefault.jpg",
          width: 480,
          height: 360,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mockVideoId3/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        default: {
          url: "https://i.ytimg.com/vi/mockVideoId3/default.jpg",
          width: 120,
          height: 90,
        },
      },
    },
  },
];

export const fetchYouTubeVideos = async (
  searchTerm: string
): Promise<YouTubeVideo[]> => {
  // Add mock since API request is not available (ran out of quota)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockVideos);
    }, 1000);
  });

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
