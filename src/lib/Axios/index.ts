import { isNetworkConnected } from '@/lib/Network';
import { prepareAxios as prepareAxios_Import } from '@drpiou/axios';

export const prepareAxios: typeof prepareAxios_Import = (config, options) => {
  return prepareAxios_Import(config, {
    ...options,
    log: __DEV__ ? options?.log ?? 'info' : 'none',
    isNetworkConnected,
  });
};
