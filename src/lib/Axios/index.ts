import { isNetworkConnected } from '@/lib/Network';
import { prepareAxios as prepareAxios_Import } from '@drpiou/axios';
import { get } from 'lodash';

export const prepareAxios: typeof prepareAxios_Import = (config, options) => {
  return prepareAxios_Import(
    {
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...get(config, 'headers'),
      },
    },
    {
      ...options,
      log: __DEV__ ? options?.log ?? 'info' : 'none',
      isNetworkConnected,
    },
  );
};
