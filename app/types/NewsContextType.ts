import { NewsItem } from "./NewsItem";
export type NewsContextType = {
  news: NewsItem[];
  addNews: (item: Omit<NewsItem, "id">) => void;
  deleteNews: (id: number) => void;
};