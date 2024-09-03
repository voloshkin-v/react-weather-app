import { useState } from 'react';

import LocationItem from '@/components/Intro/Locations/LocationItem';

import { locationDict } from '@/components/Intro/Locations/contants';
import { getRandomInt } from '@/utils';

const OtherLocations = () => {
  const [activeKey, setActiveKey] = useState(0);

  const handleShowMore = () => {
    const randomKey = getRandomInt(0, locationDict.size);
    console.log('randomKey', randomKey);
    console.log('activeKey', activeKey);

    if (randomKey !== activeKey) {
      console.log('set');

      return setActiveKey(randomKey);
    }

    if (randomKey === activeKey && randomKey === 0) {
      console.log('+ 1');

      return setActiveKey(randomKey + 1);
    }

    if (randomKey === activeKey && randomKey === locationDict.size - 1) {
      console.log('-1');

      return setActiveKey(randomKey - 1);
    }
  };

  return (
    <section aria-labelledby="large-cities-heading">
      <header className="mb-5 flex justify-between gap-2">
        <h1 id="large-cities-heading" className="text-xl">
          Popular cities
        </h1>

        <button onClick={handleShowMore} className="hover:underline">
          Get random
        </button>
      </header>

      <ul className="space-y-6">
        {locationDict.get(activeKey)!.map((location, i) => (
          <li key={i}>
            <LocationItem location={location} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherLocations;
