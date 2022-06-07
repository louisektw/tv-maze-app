import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import "./InputField.css";

export const InputField = ({
  query,
  clearInput,
  onChangeHandler,
  placeholder,
  isData,
}: any) => {

  return (
    <div className="searchField">
      <input
        className="searchInput"
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={onChangeHandler}
        style={{
          borderBottomLeftRadius: isData ? "0px" : "40px",
        }}
      />
      <div
        className="searchIcon"
        style={{
          borderBottomRightRadius: isData ? "0px" : "40px",
        }}
      >
        {query.length === 0 ? (
          <SearchIcon />
        ) : (
          <CloseIcon id="clearBtn" onClick={clearInput} />
        )}
      </div>
    </div>
  );
};
