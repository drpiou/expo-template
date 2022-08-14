import SecureStore from '@/lib/SecureStorage';
import { SecureItemValueMap } from '@/types/secureStorage';

export const secureStorage = new SecureStore<SecureItemValueMap>();
