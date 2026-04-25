"use client";

import Link from "next/link";
import ThemeSwitch from "@/app/Components/ThemeSwitch";

/**
 * Налаштування пунктів навігації верхнього меню сайту "d.r.i.l.l.".
 * * @remarks
 * Містить маршрути та підписи сторінок, які рендеряться в header.
 */
const navigation = [
  { href: "/", label: "Головна" },
  { href: "/games", label: "Ігри" },
  { href: "/team", label: "Команда" },
];
/**
 * Компонент верхнього колонтитула (header) сайту "d.r.i.l.l."
 * * @remarks
 * Містить компоненти навігації між основними сторінками "Головна", "Ігри", "Команда"
 * також містить логотип команди розробників.
 * * @component
 */
export default function Header() {
  return (
    <header
      className="border-b p-4 backdrop-blur-xl"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/" className="transition-transform duration-200 hover:scale-[1.02]">
          <img src="/logo1.png" alt="Logo" className="h-14 sm:h-16 md:h-20 w-auto" />
        </Link>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <nav className="flex flex-wrap items-center justify-center gap-3 text-base font-semibold sm:text-lg">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="theme-link rounded-full border px-4 py-2"
                style={{ borderColor: "var(--border)" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}
