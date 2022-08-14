export enum SecureItem {
  CREDENTIALS = 'credentials',
}

export type SecureItemValueMap = {
  [SecureItem.CREDENTIALS]: {
    access_token: string;
    refresh_token: string;
  };
};
