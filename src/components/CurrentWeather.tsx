import { Location, Unit, Weather } from '@/types';
import WeatherIcon from '@/components/Weather/WeatherIcon';
import { useTranslation } from 'react-i18next';
import { units } from '@/constants';

interface Props {
  current: Weather['current'];
  unit: Unit;
  locationName: Location['localNames'];
  timeZone: string;
}

const CurrentWeather = ({ current, locationName, timeZone, unit }: Props) => {
  const { t, i18n } = useTranslation();

  const {
    temp: { max, min, now },
    feelsLike,
    windSpeed,
    weather: { description, icon },
  } = current;

  return (
    <article className="w-full rounded bg-secondary p-5">
      <header className="flex justify-between gap-10">
        <p className="text-5xl font-medium">{now}°</p>

        <div className="text-right">
          <h1 className="text-2xl">{locationName[i18n.language]}</h1>
          <time className="block text-xs" dateTime="">
            11:45 AM
          </time>
        </div>
      </header>

      <ul className="mt-3 grid grid-cols-[2fr_1fr] items-center text-sm font-extralight text-secondary-foreground">
        <li className="flex items-center">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="w-12" />
          {description}
        </li>

        <li className="text-right">
          <p className="font-normal text-foreground">
            {windSpeed} {t('common.m/s')}
          </p>
        </li>

        <li>
          {t('common.feelLike')}: {feelsLike} {units[unit].label}
        </li>

        <li className="text-right">
          {min}° {t('common.to')} {max}°
        </li>
      </ul>
    </article>
  );
};

export default CurrentWeather;
