import CurrentWeather from '@/components/Weather/CurrentWeather';
import Forecast from '@/components/Weather/Forecast';
import HourlyWeather from '@/components/Weather/HourlyWeather';
import OtherLocations from '@/components/Inro/Locations/OtherLocations';

import { useWeather } from '@/context/Weather';

const WeatherView = () => {
  const { weather, unit, location } = useWeather();
  if (!weather || !location) return null;

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[25rem_1fr]">
      <CurrentWeather location={location} current={weather.current} unit={unit} />
      <HourlyWeather hourly={weather.hourly} />
      <OtherLocations />
      <Forecast />
    </div>
  );
};

export default WeatherView;
