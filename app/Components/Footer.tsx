import Link from "next/link";
/**
 * Компонент нижнього колонтитула (footer) сайту "d.r.i.l.l."
 * * @remarks
 * Містить динамічне відображення поточного року, статус системи та
 * навігаційні посилання на соціальні платформи проекту.
 * * @component
 */
export default function Footer() {
  return (
    <footer
      className="relative mt-12 border-t p-6"
      style={{ background: "var(--surface)", borderColor: "var(--border)" }}
    >
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 text-base md:flex-row">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p style={{ color: "var(--text-strong)" }}>© {new Date().getFullYear()} D.R.I.L.L. Studio. Всі права захищено.</p>
          <p className="mt-1 font-mono text-sm" style={{ color: "var(--muted)" }}>
            Система життєзабезпечення: ОНЛАЙН
          </p>
        </div>

        <div className="flex gap-6">
          <Link href="#" className="theme-link font-medium">
            Discord
          </Link>
          <Link href="#" className="theme-link font-medium">
            YouTube
          </Link>
          <Link href="#" className="theme-link font-medium">
            Twitter
          </Link>
        </div>
      </div>
    </footer>
  );
}
