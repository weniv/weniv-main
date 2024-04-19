export interface SearchFilterProps {
  handleQueryChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  category: string[];
  teacher: string[];
  tech: string[];
  brand: string[];
  difficulty: string[];
  price: string[];
  platform: string[];
  year: number;
  time: number;
  keyword: string;
}
