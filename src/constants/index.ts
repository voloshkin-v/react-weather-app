export const localStorageKeys = {
  i18n: 'lang',
  location: 'location',
  unit: 'unit',
};

export const languages = {
  en: 'en',
  uk: 'uk',
} as const;

export const units = {
  metric: {
    name: 'Celsius',
    label: '°C',
  },
  imperial: {
    name: 'Fahrenheit',
    label: '°F',
  },
};
