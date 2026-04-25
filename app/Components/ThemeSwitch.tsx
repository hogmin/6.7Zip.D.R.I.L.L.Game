"use client";

import { useSyncExternalStore, type ReactNode } from "react";
import { type AppTheme, useTheme } from "@/app/context/ThemeContext";

const emptySubscribe = () => () => {};

/**
 * Варіанти тем, доступні в перемикачі оформлення сайту "d.r.i.l.l.".
 * * @remarks
 * Кожен елемент описує значення теми, підпис кнопки та її іконку.
 */
const themeOptions: Array<{ value: AppTheme; label: string; icon: ReactNode }> = [
  {
    value: "dark",
    label: "Темна",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
      </svg>
    ),
  },
  {
    value: "light",
    label: "Світла",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2.5M12 19.5V22M4.93 4.93l1.77 1.77M17.3 17.3l1.77 1.77M2 12h2.5M19.5 12H22M4.93 19.07 6.7 17.3M17.3 6.7l1.77-1.77" />
      </svg>
    ),
  },
];

/**
 * Компонент перемикача теми сайту "d.r.i.l.l.".
 * * @remarks
 * Відображає кнопки вибору світлої та темної теми,
 * синхронізується з контекстом оформлення та враховує
 * стан монтування компонента, щоб уникнути hydration mismatch.
 * * @component
 */
export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const activeTheme = mounted ? theme : "dark";

  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border p-1 shadow-sm"
      style={{ background: "var(--card)", borderColor: "var(--border)" }}
      role="group"
      aria-label="Перемикач теми"
    >
      {themeOptions.map((option) => {
        const isActive = activeTheme === option.value;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => setTheme(option.value)}
            className="inline-flex min-w-[7.25rem] items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              background: isActive ? "var(--accent)" : "transparent",
              color: isActive ? "#ffffff" : "var(--muted-strong)",
              boxShadow: isActive ? "0 10px 24px rgba(249, 115, 22, 0.22)" : "none",
            }}
            aria-pressed={isActive}
          >
            {option.icon}
            <span>{option.label}</span>
          </button>
        );
      })}
    </div>
  );
}
