export interface Theme {
  "--primary": Color;
  "--secondary": Color;
  "--text": Color;
  "--common": Color;
}

export enum Color {
  GRAY = "#CCC",
  DARK_GRAY = "#242526",
  LIGHT_GRAY = "#f5f5f5",
  WHITE = "#F4F1F1",
  BLACK = "#000",
}

export type ThemeType = "dark" | "light";


