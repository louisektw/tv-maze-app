import { Dispatch, ReactNode, SetStateAction } from "react";
import { Theme, ThemeType } from "./theme";

export interface IThemeContext {
    themeType: ThemeType;
    theme: Theme;
    setCurrentTheme: Dispatch<SetStateAction<ThemeType>>;
  }

  export interface IThemeContextProviderProps {
    children: ReactNode;
  }