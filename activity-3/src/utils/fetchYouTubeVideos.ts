import { YouTubeVideo } from "@/types/youtube";
import { toast } from "sonner";

// Mock data for development, when the YouTube API key free tier is used
const IS_MOCK = process.env.NEXT_PUBLIC_IS_MOCK === "true";

const MOCK_YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    kind: "youtube#searchResult",
    etag: "some-etag-1",
    id: {
      kind: "youtube#video",
      videoId: "dQw4w9WgXcQ",
    },
    snippet: {
      publishedAt: "2009-10-25T06:57:33Z",
      publishTime: "2009-10-25T06:57:33Z",
      channelId: "UCuAXFkgsw1L7xaCfnd5JJOw",
      title: `Rick Astley - Never Gonna Give You Up (Official Music Video)`,
      description: `The official music video for "Never Gonna Give You Up" by Rick Astley...`,
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Rick Astley",
      liveBroadcastContent: "none",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "some-etag-2",
    id: {
      kind: "youtube#video",
      videoId: "9bZkp7q19f0",
    },
    snippet: {
      publishedAt: "2012-07-15T07:46:32Z",
      publishTime: "2012-07-15T07:46:32Z",
      channelId: "UCrDkAvwZum-UTjHmzDI2iIw",
      title: "PSY - GANGNAM STYLE(강남스타일) M/V",
      description:
        "PSY - GANGNAM STYLE(강남스타일) The global hit that started it all...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/9bZkp7q19f0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/9bZkp7q19f0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/9bZkp7q19f0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "officialpsy",
      liveBroadcastContent: "none",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "some-etag-3",
    id: {
      kind: "youtube#video",
      videoId: "kJQP7kiw5Fk",
    },
    snippet: {
      publishedAt: "2017-01-12T07:00:00Z",
      publishTime: "2017-01-12T07:00:00Z",
      channelId: "UCxoq-PAQeAdk_zyg8YS0JqA",
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      description:
        "Despacito - the global sensation that broke streaming records...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/kJQP7kiw5Fk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/kJQP7kiw5Fk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/kJQP7kiw5Fk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Luis Fonsi",
      liveBroadcastContent: "none",
    },
  },
];

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

  if (IS_MOCK) {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ items: MOCK_YOUTUBE_VIDEOS });
      }, 1000)
    );
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
        searchTerm
      )}&type=video&key=${
        process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
      }&maxResults=${MAX_RESULTS}${pageToken ? `&pageToken=${pageToken}` : ""}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${await response.text()}`);
    }

    const data = await response.json();
    return {
      items: data.items,
      nextPageToken: data.nextPageToken,
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error fetching YouTube videos:", error.message);
      toast.error(`Error fetching YouTube videos: ${error.message}`);
    } else {
      console.error("Error fetching YouTube videos:", error);
      toast.error(`Error fetching YouTube videos: ${error}`);
    }
    return { items: [] };
  }
};
