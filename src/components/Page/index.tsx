import Screen, { ScreenProps } from '@/components/Screen';
import { ThemedProps, withTheme } from '@/contexts/theme';
import React from 'react';
import { StyleSheet } from 'react-native';

export type PageProps = ThemedProps<
  ScreenProps & {
    //
  }
>;

const Page = (props: PageProps): JSX.Element => {
  const { children, ...screenProps } = props;

  return (
    <Screen {...screenProps} style={[styles.container, screenProps.style]}>
      {children}
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});

export default withTheme()(Page);
