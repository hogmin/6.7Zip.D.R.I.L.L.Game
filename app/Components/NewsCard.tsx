import { NewsCardProps } from "../types/NewsCardProps";
/**
 * Компонент картки з новинами (NewsCard) сайту "d.r.i.l.l."
 * * @remarks
 * Містить останні новини з розробки ігор 
 * та загальних новин від команди розробників.
 * @param props - Властивості компонента
 * @param props.id - Номер новини
 * @param props.date - Дата публікації
 * @param props.title - Заголовок новини
 * @param props.description - Опис або основний текст новини
 * @param props.onDelete - Можливість видалення новини на сторінці
 * * @component
 */
export default function NewsCard({ id, date, title, description, onDelete }: NewsCardProps) {
  return (
    <article className="theme-card group relative rounded-[1.5rem] p-6">
      <div className="mb-4 flex items-start justify-between gap-4">
        <span className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
          {date}
        </span>
        <button
          type="button"
          onClick={() => onDelete(id)}
          className="text-xl leading-none opacity-0 group-hover:opacity-100"
          style={{ color: "var(--muted)" }}
          title="Видалити новину"
          aria-label={`Видалити новину ${title}`}
        >
          ✕
        </button>
      </div>

      <h3 className="mb-3 text-xl font-bold" style={{ color: "var(--text-strong)" }}>
        {title}
      </h3>
      <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
        {description}
      </p>
    </article>
  );
}
