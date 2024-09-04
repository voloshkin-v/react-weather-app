import { actions, useWeatherDispatch } from '@/context/Weather';
import { Location } from '@/types';
import { useTranslation } from 'react-i18next';

interface Props {
  location: Location;
}

const LocationItem = ({ location }: Props) => {
  const dispatch = useWeatherDispatch();
  const { i18n } = useTranslation();

  const handleClick = () => {
    dispatch({ type: actions.locationSelected, location });
  };

  return (
    <button
      onClick={handleClick}
      className="w-full rounded bg-secondary p-5 text-left transition-colors hover:bg-secondary/80 active:bg-secondary/60"
    >
      <p className="text-xs uppercase text-secondary-foreground">{location.country}</p>
      <h3 className="text-2xl font-medium">{location.localNames[i18n.language]}</h3>
    </button>
  );
};

export default LocationItem;
