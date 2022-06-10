import { createContext, FC, useContext, useState } from "react";
import { ThemeType } from "../interfaces/theme.d";
import {
  IThemeContext,
  IThemeContextProviderProps,
} from "../interfaces/themeContext";
import { THEMES } from "../Theme.config";

//Context with initial state
export const ThemeContext = createContext<IThemeContext>({
  themeType: "dark",
  theme: THEMES["dark"],
} as IThemeContext);

export const ThemeProvider: FC<IThemeContextProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
