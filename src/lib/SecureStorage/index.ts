import { SecureStore } from '@drpiou/expo-secure-storage';

export enum SecureItem {
  CREDENTIALS = 'credentials',
}

export type SecureItemValueMap = {
  [SecureItem.CREDENTIALS]: {
    access_token: string;
    refresh_token: string;
  };
};

export const secure = new SecureStore<SecureItemValueMap>();
