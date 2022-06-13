import { requestApi } from '@/api/requestApi';
import { AxiosApiRequest } from '@drpiou/axios';

export type ApiProfileData = undefined;

export type ApiProfileResponseData = {
  firstname: string;
  lastname: string;
};

export const getProfile: AxiosApiRequest<ApiProfileData, ApiProfileResponseData> = (data, options) => {
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
