import { ThemeKey, themes } from '@/src/themes';
import { Theme } from '@/types/theme';
import { createThemeContext, WithThemeProps } from '@drpiou/react-theme';

export type ThemedProps<C> = C & WithThemeProps<ThemeKey, Theme>;

export const [useTheme, ThemeProvider, withTheme, withoutTheme] = createThemeContext(themes, {
  theme: 'default',
});
