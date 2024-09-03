import { useTranslation } from 'react-i18next';

import Time from '@/components/Time';
import WeatherIcon from '@/components/WeatherIcon';

import { Location, Unit, Weather } from '@/types';
import { units } from '@/constants';

interface Props {
  current: Weather['current'];
  unit: Unit;
  location: Location;
}

const CurrentWeather = ({ current, location, unit }: Props) => {
  const { t, i18n } = useTranslation();

  const {
    temp: { max, min, now },
    feelsLike,
    windSpeed,
    weather: { description, icon },
    dt,
  } = current;

  return (
    <article className="flex h-fit min-h-[11.25rem] w-full flex-col rounded bg-secondary p-5">
      <header className="xs:flex-row flex flex-1 flex-col justify-between gap-4 sm:gap-10">
        <p className="text-5xl font-medium">{now}°</p>

        <div className="xs:text-right">
          <h1 className="mb-1 text-2xl">{location.localNames[i18n.language] ?? location.name}</h1>

          <Time timestamp={dt} />
        </div>
      </header>

      <ul className="xs:grid-cols-[2fr_1fr] xs:gap-0 mt-3 grid grid-cols-1 items-center gap-1 text-sm text-secondary-foreground">
        <li className="flex items-center">
          <WeatherIcon icon={icon} description={description} />
        </li>

        <li className="xs:text-right">
          <p className="text-foreground">
            {windSpeed} {t(unit === 'metric' ? 'common.m/s' : 'common.m/h')}
          </p>
        </li>

        <li>
          {t('common.feelLike')}: {feelsLike} {units[unit].label}
        </li>

        <li className="xs:text-right">
          {min}° {t('common.to')} {max}°
        </li>
      </ul>
    </article>
  );
};

export default CurrentWeather;
