import { Path } from '@drpiou/ts-utils';
import i18n, { InterpolateOptions, TranslateOptions } from 'i18n-js';
import { merge } from 'lodash';

export type PTrans<L = unknown> = (path: Path<L>, options?: TranslateOptions) => string;

export type LTrans<L = unknown> = (path: Path<L>, value: number, options?: InterpolateOptions) => string;

i18n.fallbacks = true;

export const getCode = (): string => {
  return i18n.locale;
};

export const setCode = (code: string): void => {
  i18n.defaultLocale = code;
  i18n.locale = code;
};

export const setTranslations = (translations: { [key: string]: object }, code?: string): void => {
  i18n.translations = translations;

  if (code) {
    setCode(code);
  }
};

export const setTranslation = (code: string, translation: object): void => {
  setTranslations({ ...i18n.translations, [code]: merge({}, i18n.translations[code], translation) });
};

export const applyTranslation = (code: string, translation: object): void => {
  setTranslation(code, translation);

  setCode(code);
};
