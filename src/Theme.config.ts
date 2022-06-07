import { Color, ThemeType, Theme } from "./@types/theme.d";

export const THEMES: Record<ThemeType, Theme> = {
    light: {
        "--primary": Color.WHITE,
        "--secondary": Color.GRAY_LIGHT,
        "--text": Color.BLACK,
    },
    dark: {
        '--primary': Color.GRAY_DARK,
        '--secondary': Color.BLACK,
        '--text': Color.WHITE,
      }
}