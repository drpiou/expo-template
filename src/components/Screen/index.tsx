import KeyboardAvoid from '@/components/KeyboardAvoid';
import ScrollView, { ScrollViewProps } from '@/components/ScrollView';
import StatusBar, { StatusBarProps } from '@/components/StatusBar';
import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ScreenProps = ThemedProps<
  ScrollViewProps & {
    statusBarStyle?: StatusBarProps['style'];
  }
>;

const Screen = (props: ScreenProps): JSX.Element => {
  const { colors, theme, statusBarStyle, ...viewProps } = props;

  const { top, left, right, bottom } = useSafeAreaInsets();

  return (
    <KeyboardAvoid style={styles.container}>
      <StatusBar theme={theme} style={statusBarStyle} />
      <ScrollView
        {...withoutTheme(viewProps)}
        style={[
          styles.container,
          { backgroundColor: colors.background.light },
          viewProps.style,
          { paddingTop: top, paddingLeft: left, paddingRight: right, paddingBottom: bottom },
        ]}
        center={viewProps.center !== false}
      />
    </KeyboardAvoid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default withTheme()(Screen);
