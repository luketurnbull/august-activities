"use client";

import Sidebar from "@/components/sidebar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  // TODO: Move to Zustand one added
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen overflow-hidden">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
