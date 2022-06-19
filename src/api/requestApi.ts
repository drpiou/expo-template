import { prepareAxios } from '@/lib/Axios';
import { AxiosConfig, AxiosOptions, AxiosRequest } from '@drpiou/axios';

export const requestApi = <CD = unknown, SD = unknown, ED = unknown>(
  config?: AxiosConfig<CD>,
  options?: AxiosOptions<SD, ED>,
): AxiosRequest<SD, ED, CD> => {
  return prepareAxios<SD, ED, CD>(
    {
      baseURL: 'https://api.bdc.com',
      ...config,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=UTF-8',
        ...config?.headers,
      },
    },
    options,
  );
};
