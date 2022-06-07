import React, { Dispatch, ReactNode, SetStateAction } from "react";
import { THEMES } from "../Theme.config";
import { ThemeType, Theme } from "../@types/theme.d";

//Context type
export interface ThemeContextProps {
  themeType: ThemeType;
  theme: Theme;
  setCurrentTheme: Dispatch<SetStateAction<ThemeType>> | null;
  children: ReactNode;
}

//Context with initial state
export const ThemeContext = React.createContext<ThemeContextProps>({
  themeType: "dark",
  theme: THEMES["dark"],
  setCurrentTheme: null,
  children: null,
});

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeType>("light");

  return (
    <ThemeContext.Provider
      value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme,
        children,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);
