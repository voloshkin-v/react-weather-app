import CurrentWeather from '@/components/Weather/CurrentWeather';
import Daily from '@/components/Weather/Daily';
import Hourly from '@/components/Weather/Hourly';
import OtherLocations from '@/components/Weather/Locations/OtherLocations';

import { useWeather } from '@/context/Weather';

const WeatherView = () => {
  const { weather, unit, location } = useWeather();
  if (!weather || !location) return null;

  return (
    <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-[25rem_1fr]">
      <CurrentWeather location={location} current={weather.current} unit={unit} />
      <Hourly hourly={weather.hourly} />
      <OtherLocations />
      <Daily daily={weather.daily} />
    </div>
  );
};

export default WeatherView;
