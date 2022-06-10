import "../styles/InputField.css";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from "react";

interface IInputFieldProps {
  query: string;
  clearInput: () => void;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isData: boolean;
};

const InputField:FC<IInputFieldProps> = props => {
  return (
    <div className="searchField">
      <input
        className="searchInput"
        type="text"
        placeholder={props.placeholder}
        value={props.query}
        onChange={props.onChangeHandler}
        style={{
          borderBottomLeftRadius: props.isData ? "0px" : "40px",
        }}
      />
      <div
        className="searchIcon"
        style={{
          borderBottomRightRadius: props.isData ? "0px" : "40px",
        }}
      >
        {props.query.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={props.clearInput} />
        )}
      </div>
    </div>
  )
};

export default InputField;

