import { UseApiOptions, useAxiosNotification } from '@/hooks/useAxiosNotification';
import { api, ApiList } from '@/src/api';
import { UseAxios, useAxios } from '@drpiou/react-axios';

export const useApi = (): UseAxios<ApiList, UseApiOptions> => {
  const options = useAxiosNotification();

  return useAxios(api, options);
};
