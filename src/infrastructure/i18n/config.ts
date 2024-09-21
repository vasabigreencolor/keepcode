import { createI18n } from 'vue-i18n';
import { en } from './langs/en';
import { ru } from './langs/ru';


const messages = {
  en,
  ru,
};

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'ru',
  messages,
});

