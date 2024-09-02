import Select from 'react-select';
import { useTranslation } from 'react-i18next';

import { localStorageKeys, languages } from '@/constants';
import type { Lang } from '@/types';

interface Option {
  value: Lang;
  label: string;
}

const options: Option[] = [
  { value: languages.en, label: 'English' },
  { value: languages.uk, label: 'Українська' },
];

const LangSelect = () => {
  const { i18n } = useTranslation();

  const handleChange = (option: Option | null) => {
    if (!option) return;

    i18n.changeLanguage(option.value);
    localStorage.setItem(localStorageKeys.i18n, option.value);
  };

  const getValue = () => {
    return options.find((option) => option.value === i18n.language);
  };

  return (
    <Select
      classNamePrefix="select"
      className="min-w-40"
      value={getValue()}
      onChange={handleChange}
      options={options}
      isClearable={false}
    />
  );
};

export default LangSelect;
