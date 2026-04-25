"use client";

import { ThemeProvider } from "@/app/context/ThemeContext";

/**
 * Компонент-обгортка для підключення теми сайту "d.r.i.l.l.".
 * * @remarks
 * Використовується в кореневому layout для підключення
 * `ThemeProvider` до всього дерева клієнтських компонентів,
 * яким потрібен доступ до активної теми оформлення.
 * @param props - Властивості компонента
 * @param props.children - Дочірні елементи, що мають отримати доступ до теми
 * * @component
 */
export default function ProvidersTheme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
