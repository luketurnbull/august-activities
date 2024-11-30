"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import CentredCard from "@/components/centred-card";

export default function Home() {
  const { setName, name } = useUserStore();
  const [error, setError] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const router = useRouter();

  const onContinue = () => {
    if (name) {
      router.push("/favs");
      return;
    }

    if (input) {
      setName(input);
      router.push("/favs");
      return;
    }

    setError("Please enter your name");
  };

  return (
    <CentredCard
      title="Welcome to Favs!"
      buttonText="Continue"
      onClick={onContinue}
    >
      <div className="flex flex-col gap-4 mt-5">
        <p className="text-lg text-gray-500 text-center">
          Your favourite place to store your favourite YouTube videos.
        </p>
        {name ? (
          <p className="text-lg text-gray-500 text-center">
            Welcome back, {name}!
          </p>
        ) : (
          <Input
            placeholder="Enter your name"
            maxLength={20}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onContinue();
              }
            }}
          />
        )}
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
    </CentredCard>
  );
}
