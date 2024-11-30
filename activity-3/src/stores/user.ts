import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  name: string;
  setName: (name: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      name: "",
      setName: (name) =>
        set({
          name: name
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" "),
        }),
    }),
    {
      name: "user-storage",
    }
  )
);
