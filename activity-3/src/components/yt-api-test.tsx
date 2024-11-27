"use client";

import { useEffect, useState } from "react";

const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

export default function YtApiTest() {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=surfing`
    )
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h1>YtApiTest</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
