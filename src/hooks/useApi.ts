import { NotificationOptions, useNotification } from '@/contexts/notification';
import { ToastOptions, ToastRef, useToast } from '@/contexts/toast';
import { api, ApiList } from '@/src/api';
import { _tr } from '@/utils/trans';
import { AxiosResponseError, AxiosResponseSuccess } from '@drpiou/axios';
import { UseAxiosApi, useAxiosApi, UseAxiosApiCallbackAfter, UseAxiosApiCallbackBefore } from '@drpiou/react-axios-api';
import { isPlainObject } from 'lodash';
import { useCallback, useMemo } from 'react';

export type UseApiOptions = {
  hideToastOnError?: boolean;
  hideToastOnSuccess?: boolean;
  showError?:
    | boolean
    | string
    | Partial<NotificationOptions>
    | ((response: AxiosResponseError) => string | Partial<NotificationOptions> | false | undefined);
  showSuccess?:
    | boolean
    | string
    | NotificationOptions
    | ((response: AxiosResponseSuccess) => string | NotificationOptions | false | undefined);
  showToast?: string | ToastOptions;
};

export type UseApiBefore = {
  toastRef?: ToastRef | null;
};

export type UseApiCallbackBefore = UseAxiosApiCallbackBefore<UseApiOptions, UseApiBefore>;

export type UseApiCallbackAfter = UseAxiosApiCallbackAfter<UseApiOptions, UseApiBefore>;

export const useApi = (): UseAxiosApi<ApiList, UseApiOptions> => {
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
      if (response.isError) {
        if (response.isAxiosError && !response.isCancel && (response.isNetworkError || apiOptions?.showError)) {
          let notificationOptions: NotificationOptions | null = {
            text: _tr(response.isNetworkError ? 'error.network' : (`error.code.${response.response?.status ?? 400}` as never), {
              default: _tr('error.code.400'),
            }),
            type: 'error',
            ...(typeof apiOptions?.showError === 'string'
              ? { text: apiOptions.showError }
              : isPlainObject(apiOptions?.showError) && (apiOptions?.showError as object)),
          };

          if (typeof apiOptions?.showError === 'function') {
            const opts = apiOptions.showError(response as never);

            notificationOptions =
              opts === false ? null : { ...notificationOptions, ...(typeof opts === 'string' ? { text: opts } : opts) };
          }

          if (notificationOptions) {
            if (before?.toastRef && apiOptions?.hideToastOnError !== false) {
              before.toastRef.hide();
            }

            notification.show(notificationOptions);
          }
        }
      } else if (apiOptions?.showSuccess) {
        let notificationOptions: NotificationOptions | null = {
          text: _tr(`success.code.${response.response?.status ?? 200}` as never, {
            default: _tr('success.code.200'),
          }),
          type: 'success',
          ...(typeof apiOptions.showSuccess === 'string'
            ? { text: apiOptions.showSuccess }
            : isPlainObject(apiOptions.showSuccess) && (apiOptions.showSuccess as object)),
        };

        if (typeof apiOptions.showSuccess === 'function') {
          const opts = apiOptions.showSuccess(response as never);

          notificationOptions =
            opts === false ? null : { ...notificationOptions, ...(typeof opts === 'string' ? { text: opts } : opts) };
        }

        if (notificationOptions) {
          if (before?.toastRef && apiOptions.hideToastOnSuccess !== false) {
            before.toastRef.hide();
          }

          notification.show(notificationOptions);
        }
      }
    },
    [notification],
  );

  const options = useMemo(
    () => ({
      onBefore: callbackBefore,
      onAfter: callbackAfter,
    }),
    [callbackAfter, callbackBefore],
  );

  return useAxiosApi(api, options);
};
