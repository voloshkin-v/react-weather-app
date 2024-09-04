import { useTranslation } from 'react-i18next';

const Error = () => {
  const { t } = useTranslation();
  return <div className="text-center">{t('common.fetchError')}</div>;
};

export default Error;
