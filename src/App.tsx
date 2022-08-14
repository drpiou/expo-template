import Notifications from '@/components/Notifications';
import Toasts from '@/components/Toasts';
import { NotificationProvider } from '@/contexts/notification';
import { GlobalStateProvider } from '@/contexts/state';
import { ThemeProvider, withTheme } from '@/contexts/theme';
import { ToastProvider } from '@/contexts/toast';
import { setTranslations } from '@/lib/Localization';
import { locales } from '@/src/locales';
import { Stack } from '@/src/navigation';
import { modalNames, ScreenKey, screens } from '@/src/screens';
import { NavigationContainer } from '@react-navigation/native';
import { reduce } from 'lodash';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

setTranslations(locales, 'en');

const App = (): JSX.Element => {
  const [pages, modals] = reduce(
    screens,
    (acc, Screen, screenName) => {
      acc[modalNames.indexOf(screenName as ScreenKey) === -1 ? 0 : 1].push(
        <Stack.Screen key={screenName} name={screenName as ScreenKey}>
          {withTheme()(Screen)}
        </Stack.Screen>,
      );

      return acc;
    },
    [[], []] as [JSX.Element[], JSX.Element[]],
  );

  return (
    <SafeAreaProvider>
      <GlobalStateProvider>
        <ThemeProvider>
          <NotificationProvider Component={Notifications}>
            <ToastProvider Component={Toasts}>
              <NavigationContainer>
                <Stack.Navigator initialRouteName={'Splash'} screenOptions={{ headerShown: false }}>
                  <Stack.Group>{pages}</Stack.Group>
                  <Stack.Group screenOptions={{ presentation: 'containedTransparentModal' }}>{modals}</Stack.Group>
                </Stack.Navigator>
              </NavigationContainer>
            </ToastProvider>
          </NotificationProvider>
        </ThemeProvider>
      </GlobalStateProvider>
    </SafeAreaProvider>
  );
};

export default App;
