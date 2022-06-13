import { darkTheme } from '@/themes/dark';
import { defaultTheme } from '@/themes/default';

export type ThemeList = typeof themes;

export type ThemeKey = keyof ThemeList;

export const themes = {
  dark: darkTheme,
  default: defaultTheme,
};
