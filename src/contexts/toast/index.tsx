import Toasts from '@/components/Toasts';
import { createStackContext, StackComponentProps, StackItem, StackItemRef, StackOptions } from '@drpiou/react-stack';

export type ToastType = 'default' | 'info' | 'success' | 'warning' | 'error';

export type ToastOnPress = () => void;

export type ToastOptions = StackOptions<{
  text: string;
  type?: ToastType;
  onClose?: ToastOnPress;
}>;

export type Toast = StackItem<ToastOptions>;

export type ToastRef = StackItemRef;

export type ToastsComponentProps = StackComponentProps<Toast>;

export const [useToast, ToastProvider] = createStackContext(Toasts, {
  defaultDuration: 3000,
});
