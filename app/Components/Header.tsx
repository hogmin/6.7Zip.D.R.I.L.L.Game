import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-orange-500/30 p-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <Link href="/" className="flex items-center">
          <img
            src="/logo1.png"
            alt="Logo"
            className="h-14 sm:h-16 md:h-20 w-auto"
          />
        </Link>

        <nav className="flex gap-6 md:gap-10 font-semibold text-lg sm:text-xl md:text-2xl">
          <Link href="/" className="hover:text-orange-400 transition">
            Головна
          </Link>

          <Link href="/games" className="hover:text-orange-400 transition">
            Ігри
          </Link>

          <Link href="/team" className="hover:text-orange-400 transition">
            Команда
          </Link>
        </nav>

      </div>
    </header>
  );
}