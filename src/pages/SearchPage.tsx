import Searchbar from "../components/Searchbar";
import "../App.css";
import { useContext, useEffect } from "react";
import { TvShowContext } from "../context/TvShowContext";
import { TvShowContextType } from "../@types/tvShow.d";



export interface ISearchPageProps {};
const SearchPage:React.FunctionComponent<ISearchPageProps> = () => {

  const { setQuery, setShows } = useContext(TvShowContext) as TvShowContextType;

  

  return (
    <div className="App" >
        <Searchbar placeholder="Search for TV Shows" />
      </div>
  )
};

export default SearchPage;
