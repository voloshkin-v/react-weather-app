import { useTranslation } from 'react-i18next';

import Time from '@/components/Time';

import { Weather } from '@/types';

interface Props {
  hourly: Weather['hourly'];
}

const HourlyWeather = ({ hourly }: Props) => {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="hourly-heading">
      <h2 id="hourly-heading" className="sr-only">
        {t('common.hourly')}
      </h2>

      <div className="xs:justify-start flex flex-wrap justify-center gap-4">
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

      <img src={`https://openweathermap.org/img/wn/${data.weather.icon}@2x.png`} alt="" className="w-12" />
      <p className="mb-2 line-clamp-2 min-h-8 flex-1 text-secondary-foreground">{data.weather.description}</p>

      <p className="-mr-2 text-3xl font-medium">{data.temp}°</p>
    </article>
  );
};

export default HourlyWeather;
