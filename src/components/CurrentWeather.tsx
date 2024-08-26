import { useUnit } from '../context/UnitProvider';

interface Props {
  current: {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    wind_gust: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
  };
  location: string;
  minTemperature: number;
  maxTemperature: number;
  timeZone: string;
}

const CurrentWeather = ({ location, current, minTemperature, maxTemperature, timeZone }: Props) => {
  const { unit } = useUnit();

  const { temp, weather, feels_like, wind_speed } = current;
  const [{ description, icon }] = weather;

  console.log(
    new Intl.DateTimeFormat('en-US', {
      timeZone,
    }).format(new Date()),
  );

  return (
    <article className="w-full rounded bg-secondary p-5">
      <header className="flex justify-between gap-10">
        <p className="text-5xl font-medium">{temp}°</p>

        <div className="text-right">
          <h1 className="text-2xl">{location}</h1>
          <time className="block text-xs" dateTime="">
            11:45 AM
          </time>
        </div>
      </header>

      <ul className="mt-3 grid grid-cols-2 items-center text-sm font-extralight text-secondary-foreground">
        <li className="flex items-center">
          <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" className="w-12" />
          {description}
        </li>

        <li className="text-right">
          <p className="font-normal text-foreground">
            {wind_speed} {unit === 'metric' ? 'm/s' : 'mi/h'}
          </p>
        </li>

        <li>
          Feel like: {feels_like} °{unit === 'metric' ? 'C' : 'F'}
        </li>

        <li className="text-right">
          {minTemperature}° to {maxTemperature}°
        </li>
      </ul>
    </article>
  );
};

export default CurrentWeather;
