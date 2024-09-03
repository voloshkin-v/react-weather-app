import { useTranslation } from 'react-i18next';

import Time from '@/components/Time';

import { Weather } from '@/types';
import WeatherIcon from '../WeatherIcon';

interface Props {
  hourly: Weather['hourly'];
}

const Hourly = ({ hourly }: Props) => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="hourly-heading">
      <h2 id="hourly-heading" className="sr-only">
        {t('common.hourly')}
      </h2>

      <div className="flex h-full flex-wrap justify-center gap-4 xs:justify-start">
        {hourly.map((data) => (
          <HourlyItem key={data.dt} data={data} />
        ))}
      </div>
    </section>
  );
};

const HourlyItem = ({ data }: { data: Weather['hourly'][number] }) => {
  return (
    <article className="flex flex-shrink-0 basis-24 flex-col items-center rounded bg-secondary px-2 py-5 text-center text-xs">
      <Time timestamp={data.dt} />

      <WeatherIcon
        icon={data.weather.icon}
        description={data.weather.description}
        className={{
          container: 'mb-2 flex-1 flex-col',
          caption: 'line-clamp-2 min-h-8',
        }}
      />

      <p className="-mr-2 text-3xl font-medium">{data.temp}°</p>
    </article>
  );
};

export default Hourly;
