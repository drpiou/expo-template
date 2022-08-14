import { default as AsyncStorage_Import } from '@react-native-async-storage/async-storage';

export default class AsyncStorage<S extends Record<string, unknown>> {
  async getItem<K extends keyof S, D extends S[K] | undefined>(
    key: K,
    defaultValue?: D,
    autoSet?: boolean,
  ): Promise<D extends undefined ? S[K] | undefined : S[K]> {
    const def: S[K] | undefined = defaultValue;

    try {
      let value = await AsyncStorage_Import.getItem(key as string);

      if (value === null && def !== undefined && autoSet === true) {
        await this.setItem(key, def);

        value = await AsyncStorage_Import.getItem(key as string);
      }

      const parsedValue = value === null ? undefined : JSON.parse(value);

      return (parsedValue === undefined ? def : parsedValue) as never;
    } catch (e) {
      return def as never;
    }
  }

  async setItem<K extends keyof S>(key: K, value: S[K]): Promise<void> {
    await AsyncStorage_Import.setItem(key as string, JSON.stringify(value));
  }

  async hasItem(key: keyof S): Promise<boolean> {
    return !!(await this.getItem(key));
  }

  async removeItem(key: keyof S): Promise<void> {
    await AsyncStorage_Import.removeItem(key as string);
  }
}
