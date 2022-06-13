import Toast from '@/components/Toast';
import View from '@/components/View';
import { ToastsComponentProps } from '@/contexts/toast';
import { map } from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type ToastsProps = ToastsComponentProps & {
  //
};

const Toasts = (props: ToastsProps): JSX.Element => {
  const { stack } = props;

  const { left, right, bottom } = useSafeAreaInsets();

  const marginTop = stack.length ? 5 : 0;

  return (
    <View
      style={[styles.container, { paddingLeft: left + 15, paddingRight: right + 15, paddingBottom: bottom + 15 }]}
      pointerEvents={'box-none'}
    >
      {map(stack, (toast, index) => (
        <Toast key={toast.id} {...toast} style={{ marginTop: index !== 0 ? marginTop : 0 }} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
  },
});

export default Toasts;
