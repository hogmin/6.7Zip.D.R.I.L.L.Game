"use client";

import { useState } from "react";
import Link from "next/link";
import { useNews } from "@/app/context/NewsContext";

/**
 * Сторінка додавання новини сайту "d.r.i.l.l.".
 * * @remarks
 * Надає форму для створення нових новин, зберігає введені дані
 * у контексті новин і показує статус успішного відправлення.
 * * @component
 */
export default function AddNews() {
  const { addNews } = useNews();

  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  /**
   * Обробляє відправлення форми створення новини.
   * * @remarks
   * Забороняє стандартну поведінку браузера, додає новину
   * до контексту та очищає поля форми після успішного збереження.
   * @param e - Подія відправлення HTML-форми
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    addNews({
      title: formData.title,
      date: formData.date,
      description: formData.description
    });
    
    setIsSubmitted(true);
    setFormData({ title: "", date: "", description: "" });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  /**
   * Оновлює локальний стан полів форми додавання новини.
   * * @remarks
   * Використовує атрибут `name` елемента введення як ключ
   * для оновлення відповідного поля в об`єкті `formData`.
   * @param e - Подія зміни текстового поля або textarea
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black" style={{ color: "var(--text-strong)" }}>
          Термінал <span className="text-orange-500">Зв&apos;язку</span>
        </h1>
        <Link href="/" className="theme-link text-sm font-mono">
          [ ПОВЕРНУТИСЯ НА ГОЛОВНУ ]
        </Link>
      </div>

      <div className="theme-card-strong rounded-[1.75rem] p-8">
        {isSubmitted && (
          <div
            className="mb-6 rounded-lg border p-4 font-mono text-sm"
            style={{
              background: "var(--success-soft)",
              borderColor: "var(--success-border)",
              color: "var(--success-text)",
            }}
          >
            &gt; СТАТУС: Новину успішно завантажено в інфомережу.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-bold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              Заголовок передачі
            </label>
            <input
              type="text" id="title" name="title" required
              value={formData.title} onChange={handleChange}
              className="theme-input w-full rounded-lg px-4 py-3 font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-bold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              Зоряна дата
            </label>
            <input
              type="text" id="date" name="date" required
              value={formData.date} onChange={handleChange}
              className="theme-input w-full rounded-lg px-4 py-3 font-mono"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="mb-2 block text-sm font-bold uppercase tracking-wider"
              style={{ color: "var(--muted)" }}
            >
              Вміст повідомлення
            </label>
            <textarea
              id="description" name="description" required rows={5}
              value={formData.description} onChange={handleChange}
              className="theme-input w-full rounded-lg px-4 py-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg py-4 font-black uppercase tracking-widest text-white"
            style={{ background: "var(--accent)" }}
          >
            Відправити в мережу
          </button>
        </form>
      </div>
    </div>
  );
}
