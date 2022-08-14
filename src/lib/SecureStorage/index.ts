import * as SecureStore_Import from 'expo-secure-store';

export default class SecureStore<S extends Record<string, unknown>> {
  async getItem<K extends keyof S, D extends S[K] | undefined>(
    key: K,
    defaultValue?: D,
    autoSet?: boolean,
  ): Promise<D extends undefined ? S[K] | undefined : S[K]> {
    const def: S[K] | undefined = defaultValue;

    try {
      let value = await SecureStore_Import.getItemAsync(key as string);

      if (value === null && def !== undefined && autoSet === true) {
        await this.setItem(key, def);

        value = await SecureStore_Import.getItemAsync(key as string);
      }

      const parsedValue = value === null ? undefined : JSON.parse(value);

      return (parsedValue === undefined ? def : parsedValue) as never;
    } catch (e) {
      return def as never;
    }
  }

  async setItem<K extends keyof S>(key: K, value: S[K]): Promise<void> {
    await SecureStore_Import.setItemAsync(key as string, JSON.stringify(value));
  }

  async hasItem<K extends keyof S>(key: K): Promise<boolean> {
    return !!(await this.getItem(key));
  }

  async removeItem<K extends keyof S>(key: K): Promise<void> {
    await SecureStore_Import.deleteItemAsync(key as string);
  }
}
