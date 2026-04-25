"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "@/app/Components/NewsCard";
import { useNews } from "@/app/context/NewsContext";

/**
 * Головна сторінка сайту "d.r.i.l.l.".
 * * @remarks
 * Відображає hero-блок з автоматичним слайдером,
 * список останніх новин та посилання на створення нової публікації.
 * * @component
 */
export default function Home() {
  const { news, deleteNews } = useNews();

  const heroImages = ["/2.png", "/3.png", "/4.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  /**
   * Запускає автоматичну зміну фонових слайдів у hero-блоці.
   * * @remarks
   * Таймер циклічно перемикає активне зображення кожні 5 секунд,
   * а при демонтуванні компонента очищується.
   * @returns Функція очищення інтервалу
   */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="space-y-12">
      <section
        className="relative overflow-hidden rounded-[2rem] border py-32 text-center shadow-2xl"
        style={{ background: "var(--hero-surface)", borderColor: "var(--hero-border)" }}
      >
        {heroImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-40" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-cyan-400/10" />

        <div className="relative z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-4 drop-shadow-lg">
            Занурення <span className="text-orange-500">Почалося</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto drop-shadow-md font-medium">
            Слідкуйте за розробкою нашого головного проєкту про видобуток корисних копалин у найвіддаленіших куточках галактики.
          </p>
          
          <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-orange-500 w-6" : "bg-white/50 hover:bg-white"
                }`}
                aria-label={`Перейти до слайда ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-center justify-between border-b pb-2" style={{ borderColor: "var(--border)" }}>
          <h2 className="theme-title text-3xl font-bold">Останні новини</h2>
          <Link
            href="/add-news"
            className="rounded-full border px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em]"
            style={{
              background: "var(--accent-soft)",
              borderColor: "var(--border-strong)",
              color: "var(--accent)",
            }}
          >
            + ДОДАТИ НОВИНУ
          </Link>
        </div>

        {news.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <NewsCard
                key={item.id}
                id={item.id}
                date={item.date}
                title={item.title}
                description={item.description}
                onDelete={deleteNews}
              />
            ))}
          </div>
        ) : (
          <div
            className="rounded-2xl border border-dashed py-10 text-center font-mono"
            style={{ borderColor: "var(--border)", color: "var(--muted)" }}
          >
            Інфомережа порожня. Немає нових повідомлень.
          </div>
        )}
      </section>
    </div>
  );
}
