export interface Theme {
  "--primary": Color;
  "--secondary": Color;
  "--text": Color;
}

export enum Color {
  GRAY_DARK = "#242526",
  GRAY_LIGHT = "#f5f5f5",
  WHITE = "#F4F1F1",
  BLACK = "#000000",
}

export type ThemeType = "dark" | "light";


