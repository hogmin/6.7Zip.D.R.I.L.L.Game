import { NewsCardProps } from "../types/NewsCardProps";
export default function NewsCard({ id, date, title, description, onDelete }: NewsCardProps) {
  return (
    <article className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 relative group transition hover:border-slate-600">
      <div className="flex justify-between items-start">
        <span className="text-orange-500 text-sm font-bold">{date}</span>
        <button 
          onClick={() => onDelete(id)}
          className="text-slate-500 hover:text-red-500 transition opacity-0 group-hover:opacity-100 text-xl leading-none"
          title="Видалити новину"
        >
          ✕
        </button>
      </div>
      <h3 className="text-xl font-bold mt-2 mb-3">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </article>
  );
}