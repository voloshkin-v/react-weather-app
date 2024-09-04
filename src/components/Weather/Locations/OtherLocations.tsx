import { useTranslation } from 'react-i18next';

import data from '@/components/Weather/Locations/data.json';
import LocationItem from '@/components/Weather/Locations/LocationItem';

const OtherLocations = () => {
  const { t } = useTranslation();

  return (
    <aside aria-labelledby="large-cities-heading">
      <h1 id="large-cities-heading" className="mb-5 text-xl">
        {t('common.popularCities')}
      </h1>

      <ul className="space-y-6">
        {data.locations.map((location, i) => (
          <li key={i}>
            <LocationItem location={location} />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default OtherLocations;
