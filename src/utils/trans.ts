import { LTrans, PTrans } from '@/lib/Localization';
import { Locale } from '@/src/locales';
import i18n from 'i18n-js';

export const _tr: PTrans<Locale> = i18n.t;

export const _lr: LTrans<Locale> = i18n.l;
