import { atom } from "recoil";

// UI State atoms
export const sidebarOpenState = atom<boolean>({
  key: "sidebarOpen",
  default: true,
});

export const themeState = atom<"light" | "dark" | "system">({
  key: "theme",
  default: "system",
});

// Loading states
export const globalLoadingState = atom<boolean>({
  key: "globalLoading",
  default: false,
});
