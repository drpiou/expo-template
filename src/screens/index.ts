import HomeScreen from '@/screens/Home';
import LoadingScreen from '@/screens/Loading';
import SplashScreen from '@/screens/Splash';
import TermsScreen from '@/screens/Terms';
import React from 'react';

export type ScreenList = typeof screens;

export type ScreenKey = keyof ScreenList;

export type ScreenValue<SN extends ScreenKey> = ScreenList[SN] extends React.ComponentType<infer P>
  ? P extends object
    ? P
    : undefined
  : never;

export type ScreenValueList = {
  [SN in ScreenKey]: ScreenValue<SN>;
};

export const modalNames: ScreenKey[] = ['Loading', 'Terms'];

export const screens = {
  Home: HomeScreen,
  Loading: LoadingScreen,
  Splash: SplashScreen,
  Terms: TermsScreen,
};
