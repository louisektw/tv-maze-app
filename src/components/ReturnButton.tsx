import "../styles/ReturnButton.css";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useContext } from "react";
import { TvShowContext } from "../context/TvShowContext";
import { ITvShowContext } from "../interfaces/tvShowContext";

const ReturnButton = () => {
  const { setShows, setQuery, navigateHome } = useContext(
    TvShowContext
  ) as ITvShowContext;

  return (
    <a
      className="returnButton"
      onClick={() => {
        setShows([]);
        setQuery("");
        navigateHome(`/`);
      }}
    >
      <ArrowBackIcon />
    </a>
  );
};

export default ReturnButton;
