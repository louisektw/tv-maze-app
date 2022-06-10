import "../styles/SearchResultsBar.css";

import { Grid } from "@mui/material";
import ReturnButton from "./ReturnButton";
import { FC } from "react";

interface ISearchResultsBarProps {
  query?: string;
}
const SearchResultsBar: FC<ISearchResultsBarProps> = (
  props
) => {
  return (
    <Grid container display="flex" className="searchBarContainer">
      <Grid item xs={0.5} />
      <Grid item xs={4}>
        <ReturnButton />
      </Grid>
      <Grid item xs={7} className="searchBarText">
        All results for "{props.query}" ...
      </Grid>
    </Grid>
  );
};

export default SearchResultsBar;
