"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import NewsCard from "@/app/Components/NewsCard";
import { useNews } from "@/app/context/NewsContext";

export default function Home() {
  const { news, deleteNews } = useNews();
  
  const heroImages = ["/2.png", "/3.png", "/4.png"];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="space-y-12">
      <section className="relative text-center py-32 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden bg-slate-950">
        
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
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? "bg-orange-500 w-6" : "bg-white/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center border-b border-slate-800 pb-2 mb-6">
          <h2 className="text-3xl font-bold">Останні новини</h2>
          <Link 
            href="/add-news" 
            className="bg-orange-600/10 text-orange-500 border border-orange-500/50 hover:bg-orange-600 hover:text-white font-mono text-sm py-2 px-4 rounded transition"
          >
            + ДОДАТИ НОВИНУ
          </Link>
        </div>
        
        {news.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {news.map((item) => (
              <NewsCard 
                key={item.id} id={item.id} date={item.date} 
                title={item.title} description={item.description} onDelete={deleteNews} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 border border-dashed border-slate-700 rounded-xl text-slate-500 font-mono">
            Інфомережа порожня. Немає нових повідомлень.
          </div>
        )}
      </section>
    </div>
  );
}