export interface ITvShow {
  name: string;
  language: string;
  genres: string[];
  summary: string;
  image?: {
    medium: string;
  };
  rating?: {
    average: number;
  };
  premiered: string;
  ended: string;
  url: string;
}


