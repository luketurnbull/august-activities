import { X, Search, Star, User } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useUserStore } from "@/stores/user";

export default function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { name } = useUserStore();
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "-translate-x-full"
      } md:relative md:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4">
        <span className="text-2xl font-extrabold text-primary">
          YouTube Favs
        </span>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onClose}
        >
          <X className="h-6 w-6" />
          <span className="sr-only">Close sidebar</span>
        </Button>
      </div>
      <div className="py-2 px-4">
        <div className="flex items-center gap-2">
          <User className="h-6 w-6" />
          {name}
        </div>
      </div>
      <ScrollArea className="flex-grow">
        <nav className="space-y-2 p-4">
          <Link href="/favs/search">
            <Button variant="ghost" className="w-full justify-start">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </Link>
          <Link href="/favs/favourites">
            <Button variant="ghost" className="w-full justify-start">
              <Star className="mr-2 h-4 w-4" />
              Favs
            </Button>
          </Link>
        </nav>
      </ScrollArea>
    </div>
  );
}