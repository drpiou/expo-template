import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import React from 'react';
import { StyleSheet, Text as Text_Import, TextProps as TextProps_Import } from 'react-native';

export type TextProps = ThemedProps<
  TextProps_Import & {
    //
  }
>;

const Text = (props: TextProps): JSX.Element => {
  const { colors, ...textProps } = props;

  return <Text_Import {...withoutTheme(textProps)} style={[styles.text, { color: colors.text.dark }, textProps.style]} />;
};

const styles = StyleSheet.create({
  text: {
    //
  },
});

export default withTheme()(Text);
