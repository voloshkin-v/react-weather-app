import { Unit } from '../api/types';
import { useUnit } from '../context/UnitProvider';

const units = [
  {
    value: 'metric',
    ariaLabel: 'Celsius',
    label: '°C',
  },
  {
    value: 'imperial',
    ariaLabel: 'Fahrenheit',
    label: '°F',
  },
];

const UnitToggle = () => {
  const { unit: currentUnit, setUnit } = useUnit();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value as Unit);
  };

  return (
    <fieldset className="flex items-center rounded bg-secondary p-1">
      <legend className="sr-only">Choose unit</legend>

      {units.map((unit) => (
        <div key={unit.value}>
          <input
            type="radio"
            value={unit.value}
            id={unit.value}
            name="unit"
            className="peer sr-only"
            checked={unit.value === currentUnit}
            onChange={handleChange}
          />
          <label
            htmlFor={unit.value}
            aria-label={unit.ariaLabel}
            className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium ring-inset hover:bg-white/25 peer-checked:bg-foreground peer-checked:text-background peer-focus-visible:ring"
          >
            {unit.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default UnitToggle;
