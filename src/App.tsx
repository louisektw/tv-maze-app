import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllResultsPage from "./pages/AllResultsPage";
import DetailedPage from "./pages/DetailedPage";
import SearchPage from "./pages/SearchPage";
import { TvShowProvider } from "./context/TvShowContext";
import { useTheme } from "./context/ThemeContext";
import MenuLayout from "./components/MenuLayout";

function App() {
  const { theme, themeType } = useTheme();

  return (
    <div style={{ ...theme } as React.CSSProperties}>
      <BrowserRouter>
        <TvShowProvider>
          <Routes>
            <Route path="/" element={<MenuLayout />}>
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
