import axios from "axios";
import { FC, ReactNode, useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { ITvShowContext } from "../interfaces/tvShowContext";

interface TvShowContextProviderProps {
  children: ReactNode;
}

export const TvShowContext = createContext<ITvShowContext | null>(null);

export const TvShowProvider: FC<TvShowContextProviderProps> = ({
  children,
}) => {
  const [shows, setShows] = useState<ITvShowContext["shows"]>([]);
  const [query, setQuery] = useState("");

  const getTvShows = async (query: string) => {
    let url = `https://api.tvmaze.com/search/shows?q=${query}`;

    const { data } = await axios.get(url);
    return data;
  };

  const getTvShowById = async (Id: string) => {
    let url = `https://api.tvmaze.com/shows/${Id}`;

    const { data } = await axios.get(url);
    return data;
  };

  const navigateHome = useNavigate();
  const navigateToAllResults = useNavigate();
  const navigateToDetails = useNavigate();

  // let value = {
  //   shows,
  //   setShows,
  //   query,
  //   setQuery,
  //   getTvShows,
  //   navigateToAllResults,
  //   navigateToDetails,
  // }

  return (
    <TvShowContext.Provider
      value={{
        shows,
        setShows,
        query,
        setQuery,
        getTvShows,
        getTvShowById,
        navigateHome,
        navigateToAllResults,
        navigateToDetails,
      }}
    >
      {children}
    </TvShowContext.Provider>
  );
};
