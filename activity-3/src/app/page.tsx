"use client";

import VideoSearch from "@/components/video-search";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main>
          <h1>Hello World</h1>
          <VideoSearch />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
