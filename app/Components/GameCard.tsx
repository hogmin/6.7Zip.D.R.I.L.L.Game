import Link from "next/link";
import { GameCardProps } from "../types/GameCardProps";
/**
 * Компонент картки ігор (GameCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить інформацію про кожну розроблену гру компанією,
 * зокрема її логотип текстовий опис та подробиці розробки.
 * @param props - Властивості компонента
 * @param props.title - Заголовок з назвою гри
 * @param props.description - Короткий опис особливостей гри
 * @param props.link - Динамічне посилання на сторінку з грою
 * @param props.imageSrc - Файл зображення логотипу гри
 * * @component
 */
export default function GameCard({ title, description, link, imageSrc }: GameCardProps) {
  return (
    <article className="theme-card overflow-hidden rounded-[1.75rem] md:grid md:grid-cols-[minmax(0,0.95fr)_1.05fr]">
      <div
        className="relative flex min-h-[220px] items-center justify-center border-b md:border-b-0 md:border-r"
        style={{ background: "var(--surface-strong)", borderColor: "var(--border)" }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="p-8 text-6xl font-black tracking-tighter text-orange-500/20">{title}</span>
        )}
      </div>
      <div className="flex flex-col justify-center p-8">
        <h2 className="mb-3 text-3xl font-black" style={{ color: "var(--text-strong)" }}>
          {title}
        </h2>
        <p className="mb-6 leading-relaxed" style={{ color: "var(--muted)" }}>
          {description}
        </p>
        <div>
          <Link
            href={link}
            className="inline-block rounded-full px-6 py-3 font-bold text-white"
            style={{ background: "var(--accent)" }}
          >
            Детальніше про гру
          </Link>
        </div>
      </div>
    </article>
  );
}
