import * as SplashScreen from 'expo-splash-screen';

export const hideSplashScreen = async (): Promise<boolean> => {
  return SplashScreen.hideAsync();
};

export const preventAutoHideSplashScreen = async (): Promise<boolean> => {
  return SplashScreen.preventAutoHideAsync();
};
