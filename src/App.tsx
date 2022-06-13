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
      if (modalNames.indexOf(screenName as ScreenKey) === -1) {
        acc[0].push(<Stack.Screen key={screenName} name={screenName as ScreenKey} component={withTheme()(Screen)} />);
      } else {
        acc[1].push(<Stack.Screen key={screenName} name={screenName as ScreenKey} component={withTheme()(Screen)} />);
      }

      return acc;
    },
    [[], []] as [JSX.Element[], JSX.Element[]],
  );

  return (
    <SafeAreaProvider>
      <GlobalStateProvider>
        <ThemeProvider initialTheme={'default'}>
          <NotificationProvider>
            <ToastProvider>
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
