import { prepareAxios } from '@/lib/Axios';

export const requestApi: typeof prepareAxios = (config, options) => {
  return prepareAxios(
    {
      baseURL: 'https://api.domain.com',
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
