"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUserStore } from "@/stores/user";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle } from "lucide-react";

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
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <Card className="p-4">
        <CardHeader>
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-5xl font-semibold text-center">
              Welcome to Favs!
            </h1>
            <p className="text-lg text-gray-500 text-center">
              Your favourite place to store your favourite YouTube videos.
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mt-5">
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
            <Button size="lg" onClick={onContinue}>
              Continue
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
