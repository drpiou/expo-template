import Text from '@/components/Text';
import Touch from '@/components/Touch';
import View, { ViewProps } from '@/components/View';
import { Notification as Notification_Type } from '@/contexts/notification';
import { ThemedProps, withoutTheme, withTheme } from '@/contexts/theme';
import React from 'react';
import { StyleSheet } from 'react-native';
import { EdgeInsets } from 'react-native-safe-area-context';

export type NotificationProps = ThemedProps<
  Notification_Type &
    ViewProps & {
      insets?: EdgeInsets;
    }
>;

const Notification = (props: NotificationProps): JSX.Element => {
  const { colors, id: _id_, duration: _duration_, text, type, insets, onClose, ...viewProps } = props;

  const backgroundColor =
    type === 'default'
      ? colors.background.light
      : type === 'success'
      ? colors.background.success
      : type === 'info'
      ? colors.background.info
      : type === 'warning'
      ? colors.background.warning
      : colors.background.danger;

  const color =
    type === 'default'
      ? colors.text.dark
      : type === 'success'
      ? colors.text.success
      : type === 'info'
      ? colors.text.info
      : type === 'warning'
      ? colors.text.warning
      : colors.text.danger;

  return (
    <View {...withoutTheme(viewProps)} style={[styles.toast, { backgroundColor }, viewProps.style]}>
      {!!insets && <View style={{ height: insets?.top }} />}

      <View style={[styles.content, { paddingLeft: (insets?.left || 0) + 15, paddingRight: (insets?.right || 0) + 15 }]}>
        <Text style={[styles.text, { color }]}>{text}</Text>

        {typeof onClose === 'function' && (
          <Touch style={[styles.closeBox, { paddingRight: (insets?.right || 0) + 15 }]} onPress={onClose}>
            <View style={[styles.close, { backgroundColor: color }]} />
          </Touch>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toast: {
    paddingVertical: 15,
  },
  content: {
    position: 'relative',
  },
  text: {
    textAlign: 'center',
  },
  closeBox: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingLeft: 15,
  },
  close: {
    width: 15,
    height: 15,
  },
});

export default withTheme()(Notification);
