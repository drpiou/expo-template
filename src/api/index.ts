import { getProfile } from '@/api/getProfile';
import { getTranslation } from '@/api/getTranslation';

export type ApiList = typeof api;

export type ApiKey = keyof ApiList;

export const api = {
  getProfile,
  getTranslation,
};
