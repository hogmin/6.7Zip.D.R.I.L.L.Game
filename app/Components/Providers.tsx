"use client";

import { NewsProvider } from "@/app/context/NewsContext";

/**
 * Компонент-обгортка для підключення провайдера новин сайту "d.r.i.l.l.".
 * * @remarks
 * Використовується в кореневому layout для надання
 * всім дочірнім компонентам доступу до контексту новин.
 * @param props - Властивості компонента
 * @param props.children - Дочірні елементи, що мають отримати доступ до новин
 * * @component
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  return <NewsProvider>{children}</NewsProvider>;
}
