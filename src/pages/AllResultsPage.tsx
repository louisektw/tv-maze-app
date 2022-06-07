import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TvShowContextType } from "../@types/tvShow.d";
import TvShow from "../components/TvShow";
import { TvShowContext } from "../context/TvShowContext";
import "./AllResultsPage.css";

// export interface IAllResultsPageProps {};
// const AllResultsPage:React.FunctionComponent<IAllResultsPageProps> = props => {
const AllResultsPage = () => {
  const { shows, setShows, getTvShows, navigateToAllResults } = useContext(
    TvShowContext
  ) as TvShowContextType;

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
      <div className="allResultsText">All results for "{query}"</div>
      {shows.length > 0 && (
        <div className="allResultsData">
          {shows?.map((show: any, key: number) => (
            <a onClick={() => navigateToAllResults(`/details/${show.id}`)}>
              <TvShow show={show} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllResultsPage;
