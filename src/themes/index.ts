import { darkTheme } from '@/themes/dark';
import { lightTheme } from '@/themes/light';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  dark: darkTheme,
  light: lightTheme,
};
