import { requestApi } from '@/api/requestApi';
import { en } from '@/locales/en';
import { Locale } from '@/src/locales';
import { AxiosOptions, AxiosRequest } from '@drpiou/axios';

export type ApiTranslationData = {
  lang_code: string;
};

export type ApiTranslationResponseData = Locale;

export const getTranslation = (data: ApiTranslationData, options?: AxiosOptions): AxiosRequest<ApiTranslationResponseData> => {
  return requestApi(
    {
      url: 'translation',
      method: 'GET',
      params: data,
    },
    {
      test: true,
      testData: en,
      ...options,
    },
  );
};
