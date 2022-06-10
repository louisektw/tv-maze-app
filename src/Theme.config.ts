import { Color, ThemeType, Theme } from "./interfaces/theme.d";

export const THEMES: Record<ThemeType, Theme> = {
    light: {
        "--primary": Color.WHITE,
        "--secondary": Color.LIGHT_GRAY,
        "--text": Color.DARK_GRAY,
        "--common": Color.GRAY
    },
    dark: {
        '--primary': Color.DARK_GRAY,
        '--secondary': Color.BLACK,
        '--text': Color.WHITE,
        "--common": Color.GRAY
      }
}