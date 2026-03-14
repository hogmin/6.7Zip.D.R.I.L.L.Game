export interface NewsCardProps {
  id: number;
  date: string;
  title: string;
  description: string;
  onDelete: (id: number) => void;
}
