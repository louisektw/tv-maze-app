import "./Searchbar.css";
import { ChangeEvent, useContext, useEffect } from "react";
import TvShow from "./TvShow";
import { TvShowContext } from "../context/TvShowContext";
import { TvShowContextType } from "../@types/tvShow.d";
import { InputField } from "./InputField";
import { useTheme } from "../context/ThemeContext";

const Searchbar = ({ placeholder }: any) => {
  const {
    shows,
    setShows,
    query,
    setQuery,
    getTvShows,
    navigateToAllResults,
    navigateToDetails,
  } = useContext(TvShowContext) as TvShowContextType;

  const { theme, themeType } = useTheme();

  useEffect(() => {
    if (query.length > 0) {
      getTvShows(query).then((data: any[]) => {
        setShows(data.map((show: any) => show.show));
      });
    }
  }, [query]);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);

    if (event.target.value.length === 0) {
      setShows([]);
    }
  };

  const clearInput = () => {
    setQuery("");
    setShows([]);
  };

  return (
    <div className="search">
      <div className="searchContainer">
        <div className="searchBar">
          <InputField
            query={query}
            clearInput={clearInput}
            onChangeHandler={onChangeHandler}
            placeholder={placeholder}
            isData={shows?.length > 0}
          />
          {shows.length > 0 && (
            <div
              className="dataResult"
              style={{
                backgroundColor: theme["--primary"],
                color: theme["--text"],
              }}
            >
              {shows?.slice(0, 5).map((show: any, key: number) => (
                <a
                  className="dataRow"
                  onClick={() => navigateToDetails(`/details/${show.id}`)}
                >
                  <TvShow show={show} />
                </a>
              ))}
              <div className="viewAllResultsText">
                <a onClick={() => navigateToAllResults(`/allresults/${query}`)}>
                  View all results
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Searchbar;
