"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { NewsContextType } from "../types/NewsContextType";
import { NewsItem } from "../types/NewsItem";
const NewsContext = createContext<NewsContextType | undefined>(undefined);

export function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, date: "Березень 2026", title: "Оновлення механіки перегріву", description: "Ми додали нову систему охолодження бура. Тепер видобуток у магматичних зонах потребує тактичного підходу." },
    { id: 2, date: "Лютий 2026", title: "Перший тизер-трейлер!", description: "Робота над візуальними ефектами руйнування астероїдів завершена. Дивіться наш перший концепт-трейлер на YouTube." }
  ]);

  const addNews = (item: Omit<NewsItem, "id">) => {
    const newId = Date.now();
    setNews((prev) => [{ ...item, id: newId }, ...prev]);
  };

  const deleteNews = (id: number) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
}
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};