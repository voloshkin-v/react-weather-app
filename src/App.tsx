import Header from '@/components/Header/Header';
import WeatherView from '@/components/Weather/WeatherView';
import Error from '@/components/Weather/Error';
import Spinner from '@/components/Spinner';

import { useWeather } from '@/context/Weather';

const App = () => {
  const { status } = useWeather();

  return (
    <div className="flex min-h-svh flex-col">
      <Header />

      <main className="container flex flex-1 p-4">
        {status === 'idle' && <p>Intro</p>}
        {status === 'pending' && <Spinner />}
        {status === 'error' && <Error />}
        {status === 'success' && <WeatherView />}
      </main>
    </div>
  );
};

export default App;
