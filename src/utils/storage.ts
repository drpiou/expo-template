import AsyncStorage from '@/lib/AsyncStorage';
import { StorageItemValueMap } from '@/types/asyncStorage';

export const storage = new AsyncStorage<StorageItemValueMap>();
