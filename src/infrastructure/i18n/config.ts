import { createI18n } from 'vue-i18n';
import { en } from './langs/en';
import { ru } from './langs/ru';
import { LocalStorageService } from '../services/local-storage.service';


const messages = {
  en,
  ru,
};

const savedLanguage = LocalStorageService.getLang<string>() ?? 'ru'

export const i18n = createI18n({
  locale: savedLanguage,
  fallbackLocale: 'ru',
  messages,
});

