import Text from '@/components/Text';
import Touch, { TouchProps } from '@/components/Touch';
import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import { Toast as Toast_Type } from '@/contexts/toast';
import React from 'react';
import { StyleSheet } from 'react-native';

export type ToastProps = ThemedProps<
  Toast_Type &
    TouchProps & {
      //
    }
>;

const Toast = (props: ToastProps): JSX.Element => {
  const { colors, id: _id_, duration: _duration_, text, type: type, onPress, ...touchProps } = props;

  const backgroundColor =
    type === 'default'
      ? colors.background.dark
      : type === 'success'
      ? colors.background.success
      : type === 'info'
      ? colors.background.info
      : type === 'warning'
      ? colors.background.warning
      : colors.background.danger;

  const color =
    type === 'default'
      ? colors.text.light
      : type === 'success'
      ? colors.text.success
      : type === 'info'
      ? colors.text.info
      : type === 'warning'
      ? colors.text.warning
      : colors.text.danger;

  return (
    <Touch {...withoutTheme(touchProps)} style={[styles.toast, { backgroundColor }, touchProps.style]} onPress={onPress}>
      <Text style={[styles.text, { color }]}>{text}</Text>
    </Touch>
  );
};

const styles = StyleSheet.create({
  toast: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  text: {
    textAlign: 'center',
  },
});

export default withTheme()(Toast);
