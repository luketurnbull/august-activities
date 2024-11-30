import { X, Search, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUserStore } from "@/stores/user";
import { useGlobalStore } from "@/stores/global";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Sidebar() {
  const { name } = useUserStore();
  const { isSidebarOpen, toggleSidebar } = useGlobalStore();
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform bg-white duration-300 ease-in-out shadow-lg ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-extrabold">YouTube Favs</span>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleSidebar}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-2 p-4">
          <Link href="/favs">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/favs" && "bg-secondary"
              )}
            >
              <Star className="mr-2 h-4 w-4" />
              {name}&apos;s Favs
            </Button>
          </Link>
          <Link href="/favs/search">
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === "/favs/search" && "bg-secondary"
              )}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}
