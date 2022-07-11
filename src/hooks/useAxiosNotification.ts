import { NotificationOptions, useNotification } from '@/contexts/notification';
import { ToastOptions, ToastRef, useToast } from '@/contexts/toast';
import { _tr } from '@/utils/trans';
import { AxiosResponseError, AxiosResponseSuccess } from '@drpiou/axios';
import { UseAxiosCallbackAfter, UseAxiosCallbackBefore, UseAxiosOptions } from '@drpiou/react-axios';
import { isPlainObject } from 'lodash';
import { useCallback, useMemo } from 'react';

export type UseApiNotificationOptions = Partial<NotificationOptions> & {
  codes: {
    [key: number]: string;
  };
};

export type UseApiOptions = {
  hideToastOnError?: boolean;
  hideToastOnSuccess?: boolean;
  showError?:
    | boolean
    | string
    | Partial<UseApiNotificationOptions>
    | ((response: AxiosResponseError) => string | Partial<UseApiNotificationOptions> | false | undefined);
  showSuccess?:
    | boolean
    | string
    | UseApiNotificationOptions
    | ((response: AxiosResponseSuccess) => string | UseApiNotificationOptions | false | undefined);
  showToast?: string | ToastOptions;
};

export type UseApiBefore = {
  toastRef?: ToastRef | null;
};

export type UseApiCallbackBefore = UseAxiosCallbackBefore<UseApiOptions, UseApiBefore>;

export type UseApiCallbackAfter = UseAxiosCallbackAfter<UseApiOptions, UseApiBefore>;

export const useAxiosNotification = (): UseAxiosOptions<UseApiOptions, UseApiBefore> => {
  const notification = useNotification();
  const toast = useToast();

  const callbackBefore: UseApiCallbackBefore = useCallback(
    (apiOptions) => {
      let toastRef = null;

      if (apiOptions?.showToast) {
        toastRef = toast.show(typeof apiOptions?.showToast === 'string' ? { text: apiOptions.showToast } : apiOptions.showToast);
      }

      return { toastRef };
    },
    [toast],
  );

  const callbackAfter: UseApiCallbackAfter = useCallback(
    (response, before, apiOptions) => {
      const showNotification = (cb: unknown, defaults: NotificationOptions, hideToast?: boolean): void => {
        let notificationOptions: NotificationOptions | null = {
          ...defaults,
          ...(typeof cb === 'string'
            ? { text: cb || defaults?.text }
            : (cb || null) !== null &&
              isPlainObject(cb) && {
                ...(cb as UseApiNotificationOptions),
                text:
                  (cb as UseApiNotificationOptions).text ||
                  (cb as UseApiNotificationOptions).codes?.[response.response?.status ?? 200] ||
                  defaults?.text,
              }),
        };

        if (typeof cb === 'function') {
          const opts = cb(response as never);

          notificationOptions =
            opts === false ? null : { ...notificationOptions, ...(typeof opts === 'string' ? { text: opts } : opts) };
        }

        if (notificationOptions) {
          if (before?.toastRef && hideToast !== false) {
            before.toastRef.hide();
          }

          notification.show(notificationOptions);
        }
      };

      if (response.isError) {
        if (response.isAxiosError && !response.isCancel && (response.isNetworkError || apiOptions?.showError)) {
          const text = _tr(
            response.isNetworkError
              ? 'error.network'
              : response.isConnexionError
              ? 'error.connexion'
              : (`error.code.${response.response?.status ?? 400}` as never),
            {
              default: _tr('error.code.400'),
            },
          );

          showNotification(apiOptions?.showError, { text, type: 'error' }, apiOptions?.hideToastOnError);
        }
      } else if (apiOptions?.showSuccess) {
        const text = _tr(`success.code.${response.response?.status ?? 200}` as never, {
          default: _tr('success.code.200'),
        });

        showNotification(apiOptions.showSuccess, { text, type: 'success' }, apiOptions?.hideToastOnSuccess);
      }
    },
    [notification],
  );

  return useMemo(
    () => ({
      onBefore: callbackBefore,
      onAfter: callbackAfter,
    }),
    [callbackAfter, callbackBefore],
  );
};
