"use client";

import YtApiTest from "@/components/yt-api-test";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="font-[family-name:var(--font-geist-sans)]">
        <main>
          <h1>Hello World</h1>
          <YtApiTest />
        </main>
        <footer>
          <p>Footer</p>
        </footer>
      </div>
    </QueryClientProvider>
  );
}
