import { X, Search, Star } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useGlobalStore } from "@/stores/global";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Sidebar() {
  const { isSidebarOpen, toggleSidebar } = useGlobalStore();
  const pathname = usePathname();

  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform bg-white duration-300 ease-in-out shadow-lg ${
        isSidebarOpen ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-extrabold text-center w-full">
          <Image src="/favicon.svg" alt="Favs" width={24} height={24} />
          Favs
        </span>
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
        <nav className="flex flex-col gap-2 p-4">
          <Link href="/favs" passHref legacyBehavior>
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "w-full justify-start",
                pathname === "/favs" && "bg-primary text-white"
              )}
            >
              <Star className="mr-2 h-4 w-4 text-yellow-400 fill-current outline-black" />
              Your Favs
            </Button>
          </Link>
          <Link href="/favs/search" passHref legacyBehavior>
            <Button
              variant="ghost"
              size="lg"
              className={cn(
                "w-full justify-start",
                pathname === "/favs/search" && "bg-primary text-white"
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
