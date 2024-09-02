import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { resources } from '@/i18n/translations';
import { localStorageKeys, languages } from '@/constants';

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem(localStorageKeys.i18n) ?? languages.en,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
