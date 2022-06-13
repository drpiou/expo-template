import { StatusBarStyle } from 'expo-status-bar';

export type ThemeColor = keyof ThemeColorList;

export type ThemeColorList = {
  light: string;
  dark: string;
  info: string;
  success: string;
  warning: string;
  danger: string;
};

export type Theme = {
  colors: {
    background: ThemeColorList;
    border?: Partial<ThemeColorList>;
    text: ThemeColorList;
  };
  statusBar: StatusBarStyle;
};
