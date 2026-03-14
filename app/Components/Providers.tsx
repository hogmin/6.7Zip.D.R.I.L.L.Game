"use client";

import { NewsProvider } from "@/app/context/NewsContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <NewsProvider>{children}</NewsProvider>;
}