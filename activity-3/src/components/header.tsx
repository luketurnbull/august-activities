import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGlobalStore } from "@/stores/global";

export default function Header({ title }: { title: string }) {
  const { toggleSidebar } = useGlobalStore();

  const onMenuClick = () => {
    toggleSidebar();
  };

  return (
    <header className="bg-white shadow-lg">
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
