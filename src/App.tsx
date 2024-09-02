import Header from '@/components/Header/Header';
import WeatherView from '@/components/Weather/WeatherView';

import { useWeather } from '@/context/Weather';

const App = () => {
  const { status } = useWeather();

  return (
    <div className="flex min-h-svh flex-col">
      <Header />

      <main className="container flex-1 p-4">
        {status === 'idle' && <p>Intro</p>}
        {status === 'pending' && <p>Loading...</p>}
        {status === 'error' && <p>Error</p>}
        {status === 'success' && <WeatherView />}
      </main>
    </div>
  );
};

export default App;
