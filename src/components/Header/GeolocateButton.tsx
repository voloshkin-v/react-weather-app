import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { locationService } from '@/api/location';
import { Status } from '@/types';
import { useWeatherDispatch, actions } from '@/context/Weather';

const GeolocateButton = () => {
  const dispatch = useWeatherDispatch();
  const { t } = useTranslation();

  const [status, setStatus] = useState<Status>(() => {
    return !navigator.geolocation ? 'error' : 'idle';
  });

  const isDisabled = status === 'error' || status === 'pending';

  const handleClick = () => {
    setStatus('pending');

    const onSuccess = async (position: GeolocationPosition) => {
      const { latitude: lat, longitude: lon } = position.coords;

      try {
        const [location] = await locationService.getLocationByCoords({ lat, lon });
        dispatch({ type: actions.locationSelected, location });
        setStatus('success');
      } catch (e) {
        setStatus('error');
        console.error(e);
      }
    };

    const onError = (err: GeolocationPositionError) => {
      setStatus('error');
      console.error(`${err.code}, ${err.message}`);
    };

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  };

  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className="inline-flex h-10 min-w-40 items-center justify-center rounded bg-secondary px-4 py-2 ring-offset-background transition-colors hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground focus-visible:ring-offset-2 active:bg-secondary/60 disabled:cursor-not-allowed"
    >
      {t('common.geolocateButton')}
    </button>
  );
};

export default GeolocateButton;
