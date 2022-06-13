import { AsyncStorage } from '@drpiou/async-storage';

export enum StorageItem {
  LANG_CODE = 'lang_code',
  THEME = 'theme',
}

export type StorageItemValueMap = {
  [StorageItem.LANG_CODE]: string;
  [StorageItem.THEME]: string;
};

export const storage = new AsyncStorage<StorageItemValueMap>();
