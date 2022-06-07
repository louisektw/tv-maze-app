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

export type TvShowContextType = {
  shows: ITvShow[];
  setShows: (shows: ITvShow[]) => void;
  query: string;
  setQuery: (query: string) => void;
  getTvShows: (query: string) => Promise<any>;
  getTvShowById: (id: string) => Promise<any>;
  navigateHome: (url: string) => void;
  navigateToAllResults: (query: string) => void;
  navigateToDetails: (id: string) => void;
  
};
