import { NewsItem } from "./NewsItem";

/**
 * Тип контексту новин сайту "d.r.i.l.l.".
 * * @remarks
 * Містить список новин та методи керування ними.
 */
export type NewsContextType = {
  /** Поточний список новин. */
  news: NewsItem[];
  /** Додає нову новину без заданого ідентифікатора. */
  addNews: (item: Omit<NewsItem, "id">) => void;
  /** Видаляє новину зі списку за її ідентифікатором. */
  deleteNews: (id: number) => void;
};
