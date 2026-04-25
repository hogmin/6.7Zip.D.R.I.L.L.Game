"use client";

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import { type ReactNode } from "react";

/**
 * Тип доступних тем оформлення сайту "d.r.i.l.l.".
 * * @remarks
 * Використовується для типізації значень, які може приймати
 * перемикач теми та контекст оформлення застосунку.
 */
export type AppTheme = "dark" | "light";

/**
 * Провайдер теми сайту "d.r.i.l.l.".
 * * @remarks
 * Обгортає застосунок у `next-themes` та відповідає за
 * збереження активної теми, проставлення HTML-атрибута
 * `data-theme` і коректну гідратацію клієнтської частини.
 * @param props - Властивості провайдера
 * @param props.children - Дочірні компоненти, для яких тема буде доступною
 * @returns JSX-обгортка з налаштованим провайдером теми
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}

/**
 * Хук доступу до поточної теми сайту "d.r.i.l.l.".
 * * @remarks
 * Повертає нормалізовану активну тему та функцію її зміни,
 * приховуючи внутрішню реалізацію `next-themes` від інших компонентів.
 * @returns Об`єкт з поточною темою та методом `setTheme` для її зміни
 */
export function useTheme() {
  const { theme, resolvedTheme, setTheme } = useNextTheme();
  const activeTheme = (theme === "system" ? resolvedTheme : theme) === "light" ? "light" : "dark";

  return {
    theme: activeTheme as AppTheme,
    setTheme: (nextTheme: AppTheme) => setTheme(nextTheme),
  };
}
