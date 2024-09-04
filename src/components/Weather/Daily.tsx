import { useTranslation } from 'react-i18next';

import WeatherIcon from '@/components/WeatherIcon';

import { Weather } from '@/types';
import { getDate } from '@/utils';

interface Props {
  daily: Weather['daily'];
}

const Daily = ({ daily }: Props) => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="daily-heading">
      <h2 id="daily-heading" className="mb-5 text-xl">
        {t('common.daily')}
      </h2>

      <div className="flex flex-col gap-4">
        {daily.slice(0, 5).map((data) => (
          <DailyItem key={data.dt} data={data} />
        ))}
      </div>
    </section>
  );
};

const DailyItem = ({ data }: { data: Weather['daily'][number] }) => {
  const { t, i18n } = useTranslation();

  const date = getDate(data.dt);
  const formattedDate = new Intl.DateTimeFormat(i18n.language, { weekday: 'long' }).format(date);

  const isToday = date.toDateString() === new Date().toDateString();

  return (
    <article className="flex flex-col items-start gap-4 rounded bg-secondary p-4 md:flex-row md:items-center md:gap-10">
      <h3 className="md:flex-1">
        {isToday ? t('common.today') : formattedDate[0].toUpperCase() + formattedDate.slice(1)}
      </h3>

      <WeatherIcon
        icon={data.weather.icon}
        description={data.weather.description}
        className={{ container: 'md:flex-[2]' }}
      />

      <div className="flex w-full items-center md:flex-[3]">
        {data.temp.min}° - {data.temp.max}°
      </div>
    </article>
  );
};

export default Daily;
