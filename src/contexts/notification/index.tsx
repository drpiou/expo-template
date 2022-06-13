import Notifications from '@/components/Notifications';
import { createStackContext, StackComponentProps, StackItem, StackItemRef, StackOptions } from '@drpiou/react-stack';

export type NotificationType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type NotificationOnClose = () => void;

export type NotificationOptions = StackOptions<{
  text: string;
  type?: NotificationType;
  onClose?: NotificationOnClose;
}>;

export type Notification = StackItem<NotificationOptions>;

export type NotificationRef = StackItemRef;

export type NotificationsComponentProps = StackComponentProps<Notification>;

export const [useNotification, NotificationProvider] = createStackContext(Notifications, {
  defaultDuration: 3000,
});
