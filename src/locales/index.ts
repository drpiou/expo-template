import { en } from '@/locales/en';
import { fr } from '@/locales/fr';
import { DeepRecord } from '@drpiou/ts-utils';

type LocaleRecord<T extends DeepRecord<string, string>> = T;

export type Locale = LocaleRecord<typeof en>;

export const locales = { en, fr };
