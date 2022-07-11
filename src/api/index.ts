import { getProfile } from '@/api/getProfile';
import { getTranslation } from '@/api/getTranslation';
import { requestApi } from '@/api/requestApi';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getProfile,
  getTranslation,
  request: requestApi,
};
