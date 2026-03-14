import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-slate-900 border-b border-orange-500/30 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-black tracking-widest text-orange-500">
          <img src="/logo1.png" alt="" className="w-35 h-30"></img>
        </Link>
        <nav className="space-x-6">
          <Link href="/" className="hover:text-orange-400 transition">Головна</Link>
          <Link href="/games" className="hover:text-orange-400 transition">Ігри</Link>
          <Link href="/team" className="hover:text-orange-400 transition">Команда</Link>
        </nav>
      </div>
    </header>
  );
}