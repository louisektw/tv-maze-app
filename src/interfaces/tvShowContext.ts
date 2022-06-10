import { ITvShow } from "./tvShow";

export interface ITvShowContext {
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