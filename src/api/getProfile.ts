import { requestApi } from '@/api/requestApi';
import { AxiosRequestDataVoid } from '@drpiou/axios';

export type ApiProfileResponseData = {
  firstname: string;
  lastname: string;
};

export const getProfile: AxiosRequestDataVoid<ApiProfileResponseData> = (data, options) => {
  return requestApi(
    {
      url: 'profile',
      method: 'GET',
      params: data,
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
