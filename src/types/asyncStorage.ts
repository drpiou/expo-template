export enum StorageItem {
  LANG_CODE = 'lang_code',
  THEME = 'theme',
}

export type StorageItemValueMap = {
  [StorageItem.LANG_CODE]: string;
  [StorageItem.THEME]: string;
};
