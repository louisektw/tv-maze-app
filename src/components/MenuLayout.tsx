import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { TvShowContextType } from "../@types/tvShow.d";
import { TvShowContext } from "../context/TvShowContext";
import "./MenuLayout.css";

export interface IMenuLayoutProps {}
const MenuLayout: React.FunctionComponent<IMenuLayoutProps> = (props) => {
  const { setShows, setQuery, navigateHome } = useContext(
    TvShowContext
  ) as TvShowContextType;
  return (
    <div>
      <div className="menuBar">
        <button
          onClick={() => {
            setShows([]);
            setQuery("");
            navigateHome(`/`);
          }}
          className="searchButton"
        >
          Home
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default MenuLayout;
