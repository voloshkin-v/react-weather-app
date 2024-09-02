import { Weather } from '../types';

interface Props {
  // hourly: Weather[''];
}

const HourlyWeather = ({}: Props) => {
  return (
    <section aria-labelledby="hourly-heading">
      <h2 id="hourly-heading" className="sr-only">
        Hourly forecast
      </h2>

      <ul className="flex gap-2">
        <li className="rounded bg-secondary p-5 text-center">
          <time dateTime="">9:00 AM</time>
          <p>Snow</p>
          <p className="text-4xl font-medium">-1°</p>
        </li>
      </ul>
    </section>
  );
};

export default HourlyWeather;
