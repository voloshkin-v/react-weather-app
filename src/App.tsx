import Search from './components/Search';
import UnitToggle from './components/UnitToggle';
import CurrentWeather from './components/CurrentWeather';

import data from './mock/data.json';

const App = () => {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <header className="flex items-center justify-between p-4">
        <Search />
        <UnitToggle />
      </header>

      <main className="p-4">
        <div className="grid grid-cols-[20rem_1fr] gap-9">
          <div>
            <CurrentWeather
              location="Warsaw"
              minTemperature={1}
              maxTemperature={2}
              current={data.current}
              timeZone="Europe/Kyiv"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
