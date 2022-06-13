import { isNetworkConnected } from '@/lib/Network';
import { UseAxios, useAxios as useAxios_Import } from '@drpiou/react-axios';
import { useCallback, useMemo } from 'react';

const useAxios = (): UseAxios => {
  const axios = useAxios_Import();

  const requestAxios: typeof axios.request = useCallback(
    (config, options) => {
      return axios.request(config, {
        ...options,
        log: __DEV__ ? options?.log ?? 'info' : 'none',
        isNetworkConnected,
      });
    },
    [axios],
  );

  return useMemo(
    () => ({
      ...axios,
      request: requestAxios,
    }),
    [axios, requestAxios],
  );
};
