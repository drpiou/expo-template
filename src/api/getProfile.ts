import { requestApi } from '@/api/requestApi';
import { AxiosOptions, AxiosRequest } from '@drpiou/axios';

export type ApiProfileResponseData = {
  firstname: string;
  lastname: string;
};

export const getProfile = (options: AxiosOptions): AxiosRequest<ApiProfileResponseData> => {
  return requestApi(
    {
      url: 'profile',
      method: 'GET',
    },
    {
      test: true,
      testData,
      ...options,
    },
  );
};

const testData: ApiProfileResponseData = {
  firstname: 'Firstname',
  lastname: 'Lastname',
};
