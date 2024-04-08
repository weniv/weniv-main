export interface LearnItem {
  brand: "The Oreum" | "제주코딩베이스캠프";
  image: string;
  title: string;
  description: string;
  price: number;
  teacher: string[];
  date: string;
  time: string;
  difficulty: "입문" | "초급" | "중급이상";

  platform: string[];
  category: string;
  tag: string[];
  tech: string[];
  roadmap: [];
}
