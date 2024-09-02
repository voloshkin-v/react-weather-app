import { largeCities } from '../constants';

interface Props {
  onSearch: (location: string) => void;
}

const OtherCities = ({ onSearch }: Props) => {
  return (
    <section aria-labelledby="large-cities-heading">
      <h2 id="large-cities-heading" className="mb-5 text-xl">
        Other large cities
      </h2>

      <ul className="space-y-6">
        {largeCities.map((city, i) => (
          <li key={i}>
            <button
              onClick={() => onSearch(city.name)}
              className="w-full rounded bg-secondary p-5 text-left transition-colors hover:bg-secondary/70 active:bg-secondary/80"
            >
              <p className="text-xs uppercase text-secondary-foreground">{city.country}</p>
              <h3 className="text-2xl font-medium">{city.name}</h3>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default OtherCities;
