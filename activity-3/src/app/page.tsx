"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const { setName, name } = useUserStore();
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const onContinue = () => {
    if (input) {
      setName(input);
    }

    if (name || input) {
      router.push("/favs");
    }
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center w-full h-screen">
      <div className="flex flex-col gap-2 justify-center items-center">
        <h1 className="text-5xl font-semibold">Welcome to YouTube Favs</h1>
        <p className="text-lg text-gray-500">
          Your favourite place to store your favourite YouTube videos.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {name ? (
          <p className="text-lg text-gray-500">Welcome back, {name}!</p>
        ) : (
          <Input
            placeholder="Enter your name"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onContinue();
              }
            }}
          />
        )}
        <Button size="lg" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
