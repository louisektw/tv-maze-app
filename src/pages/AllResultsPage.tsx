import "../styles/AllResultsPage.css";

import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import TvShow from "../components/TvShow";
import SearchResultsBar from "../components/SearchResultsBar";
import { TvShowContext } from "../context/TvShowContext";
import { ITvShowContext } from "../interfaces/tvShowContext";

const AllResultsPage = () => {
  const { shows, setShows, getTvShows, navigateToAllResults } = useContext(
    TvShowContext
  ) as ITvShowContext;

  const { query } = useParams();

  useEffect(() => {
    if (query!.length > 0) {
      getTvShows(query!).then((data: any[]) => {
        setShows(data.map((show: any) => show.show));
      });
    }
  }, []);

  return (
    <div className="allResultsContainer">
      <SearchResultsBar query={query} />
      {shows.length > 0 && (
        <div className="allResultsData">
          {shows?.map((show: any, key: number) => (
            <a onClick={() => navigateToAllResults(`/details/${show.id}`)}>
              <TvShow show={show} />
            </a>
          ))}
        </div>
      )}
      <div className="allResultsFooter" />
    </div>
  );
};

export default AllResultsPage;
