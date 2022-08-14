import Notification from '@/components/Notification';
import View from '@/components/View';
import { Notification as Notification_Type } from '@/contexts/notification';
import { StackComponentProps } from '@drpiou/react-stack';
import { map } from 'lodash';
import React from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type NotificationsProps = StackComponentProps<Notification_Type> & {
  //
};

const Notifications = (props: NotificationsProps): JSX.Element => {
  const { stack } = props;

  const insets = useSafeAreaInsets();

  const notificationsCount = stack.length;

  const marginBottom = notificationsCount ? 5 : 0;

  return (
    <View style={styles.container} pointerEvents={'box-none'}>
      {map(stack, (notification, index) => (
        <Notification
          key={notification.id}
          {...notification}
          style={{ marginBottom: index !== notificationsCount - 1 ? marginBottom : 0 }}
          insets={{ ...insets, top: index === 0 ? insets.top : 0 }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

export default Notifications;
