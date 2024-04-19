export type CardProps = {
  brand: string;
  image: string;
  title: string;
  description: string;
  price: number;
  teacher: string[];
  date: string;
  time: string;

  difficulty: string;
  platform: string[];
  link: Link;

  category: string;
  tag: [];
  tech: string[];
  roadmap: [];
};

type Link = {
  inflearn?: string;
  youtube?: string;
};
