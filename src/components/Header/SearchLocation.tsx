import { useTranslation } from 'react-i18next';

import AppAsyncSelect from '@/components/AppAsyncSelect';

import { locationService } from '@/api/location';
import { useWeather, useWeatherDispatch, actions } from '@/context/Weather';
import type { Location } from '@/types';

const SearchLocation = () => {
  const { t, i18n } = useTranslation();
  const { location } = useWeather();
  const dispatch = useWeatherDispatch();

  const handleChange = (location: Location | null) => {
    if (!location) {
      return dispatch({ type: actions.locationRemoved });
    }

    dispatch({ type: actions.locationSelected, location });
  };

  const formatOptionLabel = (option: Location) => {
    let label = option.localNames[i18n.language] ?? option.name;

    if (option.state) {
      label += `, ${option.state}`;
    }

    return label;
  };

  return (
    <AppAsyncSelect
      className="w-full"
      value={location}
      openMenuOnClick={false}
      placeholder={t('common.searchPlaceholder')}
      onChange={handleChange}
      loadOptions={(inputValue) => locationService.getCoordsByName(inputValue)}
      loadingMessage={() => t('common.loading')}
      formatOptionLabel={formatOptionLabel}
      getOptionValue={(option) => `${option.lat}-${option.lon}`}
      classNamePrefix="select"
    />
  );
};

export default SearchLocation;
