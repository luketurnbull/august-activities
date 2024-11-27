import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header({ title }: { title: string }) {
  const onMenuClick = () => {
    console.log("clicked");
    // TODO: Move to Zustand one added
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open sidebar</span>
        </Button>
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
      </div>
    </header>
  );
}
