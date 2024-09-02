import { useWeather, useWeatherDispatch, actions } from '@/context/Weather';
import { Unit } from '@/types';
import { units } from '@/constants';

const UnitToggle = () => {
  const { unit: selectedUnit } = useWeather();
  const dispatch = useWeatherDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: actions.unitChanged, unit: e.target.value as Unit });
  };

  return (
    <fieldset className="flex items-center rounded bg-secondary p-1">
      <legend className="sr-only">Choose unit</legend>

      {Object.entries(units).map(([unit, data]) => (
        <div key={unit}>
          <input
            type="radio"
            value={unit}
            id={unit}
            name="unit"
            className="peer sr-only"
            checked={unit === selectedUnit}
            onChange={handleChange}
          />
          <label
            htmlFor={unit}
            aria-label={data.name}
            className="peer-checked:text-background0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full font-medium tracking-tighter peer-checked:bg-foreground peer-checked:text-background"
          >
            {data.label}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default UnitToggle;
