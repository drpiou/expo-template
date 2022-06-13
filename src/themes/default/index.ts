import { Theme } from '@/types/theme';

export const defaultTheme: Theme = {
  colors: {
    background: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
      info: 'cyan',
      success: 'greenyellow',
      warning: 'yellow',
      danger: 'pink',
    },
    text: {
      light: 'rgb(255, 255, 255)',
      dark: 'rgb(28, 28, 30)',
      info: 'blue',
      success: 'darkgreen',
      warning: 'orange',
      danger: 'red',
    },
  },
  statusBar: 'dark',
};
