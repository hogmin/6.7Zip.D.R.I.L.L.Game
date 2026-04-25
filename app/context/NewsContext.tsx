"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { NewsContextType } from "../types/NewsContextType";
import { NewsItem } from "../types/NewsItem";

/**
 * Контекст новин сайту "d.r.i.l.l.".
 * * @remarks
 * Використовується для зберігання масиву новин та функцій
 * керування ними в будь-якому клієнтському компоненті застосунку.
 */
const NewsContext = createContext<NewsContextType | undefined>(undefined);

/**
 * Провайдер новин сайту "d.r.i.l.l.".
 * * @remarks
 * Зберігає початковий список новин, надає методи додавання
 * та видалення записів і передає їх через React Context.
 * @param props - Властивості провайдера
 * @param props.children - Дочірні елементи, які отримають доступ до новин
 * @returns JSX-обгортка з провайдером контексту новин
 */
export function NewsProvider({ children }: { children: ReactNode }) {
  const [news, setNews] = useState<NewsItem[]>([
    { id: 1, date: "Березень 2026", title: "Оновлення механіки перегріву", description: "Ми додали нову систему охолодження бура. Тепер видобуток у магматичних зонах потребує тактичного підходу." },
    { id: 2, date: "Лютий 2026", title: "Перший тизер-трейлер!", description: "Робота над візуальними ефектами руйнування астероїдів завершена. Дивіться наш перший концепт-трейлер на YouTube." }
  ]);

  /**
   * Додає нову новину до початку списку.
   * * @remarks
   * Створює унікальний ідентифікатор на основі поточного часу
   * та вставляє новину на першу позицію масиву.
   * @param item - Дані новини без ідентифікатора
   */
  const addNews = (item: Omit<NewsItem, "id">) => {
    const newId = Date.now();
    setNews((prev) => [{ ...item, id: newId }, ...prev]);
  };

  /**
   * Видаляє новину зі списку за її ідентифікатором.
   * @param id - Унікальний ідентифікатор новини
   */
  const deleteNews = (id: number) => {
    setNews((prev) => prev.filter((n) => n.id !== id));
  };

  return (
    <NewsContext.Provider value={{ news, addNews, deleteNews }}>
      {children}
    </NewsContext.Provider>
  );
}

/**
 * Хук доступу до контексту новин сайту "d.r.i.l.l.".
 * * @remarks
 * Дає змогу отримати список новин та функції керування ними.
 * Викликає помилку, якщо використовується поза `NewsProvider`.
 * @returns Об`єкт контексту новин з даними та методами керування
 */
export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) throw new Error("useNews must be used within a NewsProvider");
  return context;
};
