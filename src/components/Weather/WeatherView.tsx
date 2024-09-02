import { useWeather } from '../../context/Weather';
import CurrentWeather from '../CurrentWeather';

const WeatherView = () => {
  const { weather, unit, location } = useWeather();

  if (!weather || !location) return null;

  return (
    <div className="grid grid-cols-[25rem_1fr] gap-10">
      <CurrentWeather
        timeZone={weather.timeZone}
        locationName={location.localNames}
        current={weather.current}
        unit={unit}
      />
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default WeatherView;
