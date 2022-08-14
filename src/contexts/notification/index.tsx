import { createStackContext, StackItem, StackOptions, StackRef } from '@drpiou/react-stack';

export type NotificationType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type NotificationOnClose = () => void;

export type NotificationOptions = StackOptions<{
  text: string;
  type?: NotificationType;
  onClose?: NotificationOnClose;
}>;

export type Notification = StackItem<NotificationOptions>;

export type NotificationRef = StackRef<NotificationOptions>;

export const [useNotification, NotificationProvider] = createStackContext<NotificationOptions>({
  defaultDuration: 3000,
});
