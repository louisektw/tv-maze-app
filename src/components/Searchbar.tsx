import "../styles/Searchbar.css";

import { ChangeEvent, FC, useContext, useEffect } from "react";
import { TvShowContext } from "../context/TvShowContext";
import { ITvShowContext } from "../interfaces/tvShowContext";
import InputField from "./InputField";
import TvShow from "./TvShow";

interface ISearchBarProps {
  placeholder: string;
}

const SearchBar: FC<ISearchBarProps> = (props) => {
  const {
    shows,
    setShows,
    query,
    setQuery,
    getTvShows,
    navigateToAllResults,
    navigateToDetails,
  } = useContext(TvShowContext) as ITvShowContext;

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
            placeholder={props.placeholder}
            isData={shows?.length > 0}
          />
          {shows.length > 0 && (
            <div className="dataResult">
              {shows?.slice(0, 5).map((show: any, key: number) => (
                <a
                  className="dataRow"
                  onClick={() => navigateToDetails(`/details/${show.id}`)}
                >
                  <TvShow show={show} />
                </a>
              ))}
              <hr />
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

export default SearchBar;
