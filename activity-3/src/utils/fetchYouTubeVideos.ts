import { YouTubeApiResponse } from "@/types/youtube";

import { YouTubeVideo } from "@/types/youtube";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

const mockVideos: YouTubeVideo[] = [
  {
    kind: "youtube#searchResult",
    etag: "VpBGkOow14P2HS8yW7fosmY093w",
    id: {
      kind: "youtube#video",
      videoId: "mZdUQgQcBxg",
    },
    snippet: {
      publishedAt: "2018-04-19T06:38:50Z",
      channelId: "UC3gtA2R4oUsROcC151Pvg9A",
      title: "Hx hhx HF",
      description: "Vcjcns Mh z n dd.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/mZdUQgQcBxg/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/mZdUQgQcBxg/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/mZdUQgQcBxg/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Akif Aytekin",
      liveBroadcastContent: "none",
      publishTime: "2018-04-19T06:38:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "jNv6uvqNTlAZPL9iqwLC1SP8H2E",
    id: {
      kind: "youtube#video",
      videoId: "_kHWJbgIUPA",
    },
    snippet: {
      publishedAt: "2023-02-10T05:00:17Z",
      channelId: "UCar4T5vC6Qh4I36cW48g2Dg",
      title: "FGH - Phonk Ya",
      description:
        "FGH #phonkrap #gtr35 #rapphonk #phonk2024 FGH - Phonk Ya https://bfan.link/FGH-PhonkYa Subscribe to Futureplay ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/_kHWJbgIUPA/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/_kHWJbgIUPA/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/_kHWJbgIUPA/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "FuturePlay",
      liveBroadcastContent: "none",
      publishTime: "2023-02-10T05:00:17Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ysajUoVCt3DdUmjWZ-soH819k9w",
    id: {
      kind: "youtube#video",
      videoId: "rxQ8oE0GA4E",
    },
    snippet: {
      publishedAt: "2023-03-28T08:22:50Z",
      channelId: "UC01986wCAguq8dDDjg1XoeQ",
      title: "RAINBOW POPPY FRIENDS IMPOSSIBLE DATE #shrots FGH(1)",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/rxQ8oE0GA4E/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/rxQ8oE0GA4E/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/rxQ8oE0GA4E/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "CUTE BABY",
      liveBroadcastContent: "none",
      publishTime: "2023-03-28T08:22:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "OwIsNJf_7-iGejmo448_5ZIpqFg",
    id: {
      kind: "youtube#video",
      videoId: "sxTYOA5mo_A",
    },
    snippet: {
      publishedAt: "2020-12-03T05:02:31Z",
      channelId: "UCNhn7Aup1TYoDhjMWlPHmnA",
      title: "Fgh",
      description: "Video from Uttam Mandal.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/sxTYOA5mo_A/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/sxTYOA5mo_A/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/sxTYOA5mo_A/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Utttam Mandal",
      liveBroadcastContent: "none",
      publishTime: "2020-12-03T05:02:31Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "gikwu7XidWvWrL-4m-9IaLHIoKA",
    id: {
      kind: "youtube#video",
      videoId: "FRf0bX5TtIM",
    },
    snippet: {
      publishedAt: "2019-07-19T14:00:40Z",
      channelId: "UCF-mVLrZ1Htjo-8XS8f3Tpw",
      title: "Fgh",
      description: "I made thguyfv is fun video just for you.",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/FRf0bX5TtIM/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/FRf0bX5TtIM/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/FRf0bX5TtIM/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Misthy avatar channel",
      liveBroadcastContent: "none",
      publishTime: "2019-07-19T14:00:40Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "RuvHKT_PAuWRNiRrR882XgqPzQY",
    id: {
      kind: "youtube#video",
      videoId: "EX8rJTk--C0",
    },
    snippet: {
      publishedAt: "2022-12-05T05:23:50Z",
      channelId: "UCXebhEUUwBqa4bA_w8Q5J4A",
      title:
        "fgygrrfyyhgffhhh huh uh HD set yh or f GB ji it yi kg DUI or et uh ji if fyi yi j yr t5 TCU i ji",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EX8rJTk--C0/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/EX8rJTk--C0/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/EX8rJTk--C0/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "SS FILMS SITAMARHI ",
      liveBroadcastContent: "none",
      publishTime: "2022-12-05T05:23:50Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "1Xqx_xC3QNo7SqR23NLPx9Mvvik",
    id: {
      kind: "youtube#video",
      videoId: "YT5jL9RgxxI",
    },
    snippet: {
      publishedAt: "2021-01-21T15:20:47Z",
      channelId: "UCuZlQVNDTZFiQR6V-uRV3Ag",
      title: "💜FGH. song💜",
      description: "",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/YT5jL9RgxxI/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/YT5jL9RgxxI/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/YT5jL9RgxxI/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "FGH song",
      liveBroadcastContent: "none",
      publishTime: "2021-01-21T15:20:47Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "Dwny0TtrHop6HqV-vqfWl1oNUGk",
    id: {
      kind: "youtube#video",
      videoId: "dexwD_Cf2Yk",
    },
    snippet: {
      publishedAt: "2016-10-04T12:21:02Z",
      channelId: "UC0_V9mMW-asO3KMYxd3-ZNQ",
      title: "FGH Security Door Supervision - An introduction...",
      description:
        "Experience first hand what makes FGH Security one of the UK's leading Door Supervision providers. From our friendly and ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/dexwD_Cf2Yk/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/dexwD_Cf2Yk/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/dexwD_Cf2Yk/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "fghsecurity",
      liveBroadcastContent: "none",
      publishTime: "2016-10-04T12:21:02Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "XoKM4s9Nr1jqxX5Xms2LE2uunOs",
    id: {
      kind: "youtube#video",
      videoId: "EQxaeZKM0K8",
    },
    snippet: {
      publishedAt: "2024-11-27T13:12:51Z",
      channelId: "UC5PM5L0HtnP7X9FnhLqqgdA",
      title:
        "FGH WebTalks: Antibioticoterapia nos Cuidados Paliativos - Uma Estratégia Inovadora",
      description:
        "FGH WebTalks! Nesta terça-feira, 26 de novembro, teremos mais uma edição do FGH WebTalks! O tema da vez é: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/EQxaeZKM0K8/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/EQxaeZKM0K8/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/EQxaeZKM0K8/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "No Ar FGH",
      liveBroadcastContent: "none",
      publishTime: "2024-11-27T13:12:51Z",
    },
  },
  {
    kind: "youtube#searchResult",
    etag: "ijGdqtE0s4e6cFxUhfI6xs_TRpE",
    id: {
      kind: "youtube#video",
      videoId: "OUWwB-ihSyo",
    },
    snippet: {
      publishedAt: "2023-07-05T02:41:11Z",
      channelId: "UCyl1CPDST86CWCOx9CBGfTg",
      title: "F G H FNaF #shorts #youtubeshorts #alphabetlore #freddyfazbear",
      description:
        "F G H FNaF #shorts #youtubeshorts #alphabetlore #freddyfazbear ----------------------------------------- TKS FOR WATCHING PLS LIKE ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/OUWwB-ihSyo/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/OUWwB-ihSyo/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/OUWwB-ihSyo/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "Magnet Pro",
      liveBroadcastContent: "none",
      publishTime: "2023-07-05T02:41:11Z",
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
