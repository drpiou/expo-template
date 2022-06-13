import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export type InputProps = ThemedProps<
  TextInputProps & {
    //
  }
>;

const Input = (props: InputProps): JSX.Element => {
  const { colors, ...inputProps } = props;

  return <TextInput {...withoutTheme(inputProps)} style={[styles.input, { color: colors.text.dark }, inputProps.style]} />;
};

const styles = StyleSheet.create({
  input: {
    //
  },
});

export default withTheme()(Input);
