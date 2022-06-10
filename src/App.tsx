import { BrowserRouter, Route, Routes } from "react-router-dom";
import Switch from "./components/Switch";
import { useTheme } from "./context/ThemeContext";
import { TvShowProvider } from "./context/TvShowContext";
import AllResultsPage from "./pages/AllResultsPage";
import DetailedPage from "./pages/DetailedPage";
import SearchPage from "./pages/SearchPage";

function App() {
  const { theme, themeType, setCurrentTheme } = useTheme();

  let isDark = themeType === "dark" ? false : true;

  const toggleThemeHandler = () => {
    setCurrentTheme(isDark ? "dark" : "light");
  };

  return (
    <div style={{ ...theme } as React.CSSProperties}>
      <BrowserRouter>
        <TvShowProvider>
          <Routes>
            <Route
              path="/"
              element={
                <Switch
                  label={"dark"}
                  otherLabel={"light"}
                  value={isDark}
                  onToggleHandler={toggleThemeHandler}
                />
              }
            >
              <Route index element={<SearchPage />} />
              <Route path="allresults/:query" element={<AllResultsPage />} />
              <Route path="details/:id" element={<DetailedPage />} />
            </Route>
          </Routes>
        </TvShowProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
