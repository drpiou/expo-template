import { requestApi } from '@/api/requestApi';
import { en } from '@/locales/en';
import { Locale } from '@/src/locales';
import { AxiosApiRequest } from '@drpiou/axios';

export type ApiTranslationData = {
  lang_code: string;
};

export type ApiTranslationResponseData = Locale;

export const getTranslation: AxiosApiRequest<ApiTranslationData, ApiTranslationResponseData> = (data, options) => {
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
