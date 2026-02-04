import { create } from "zustand";

type Theme = "light" | "dark";

type UIState = {
  theme: Theme;
  toggleTheme: () => void;
};

export const useUIStore = create<UIState>((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
}));
