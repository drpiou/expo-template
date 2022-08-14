import { createStackContext, StackItem, StackOptions, StackRef } from '@drpiou/react-stack';

export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type ToastOnClose = () => void;

export type ToastOptions = StackOptions<{
  text: string;
  type?: ToastType;
  onClose?: ToastOnClose;
}>;

export type Toast = StackItem<ToastOptions>;

export type ToastRef = StackRef<ToastOptions>;

export const [useToast, ToastProvider] = createStackContext<ToastOptions>({
  defaultDuration: 3000,
});
