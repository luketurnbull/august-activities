"use client";

import Sidebar from "@/components/sidebar";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "sonner";
const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex flex-col flex-1 overflow-hidden">{children}</div>
      </div>
    </QueryClientProvider>
  );
}
