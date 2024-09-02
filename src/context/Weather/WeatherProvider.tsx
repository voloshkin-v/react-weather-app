import { createContext, useContext, useEffect, useReducer } from 'react';
import { useTranslation } from 'react-i18next';

import { type State, type Action, reducer, actions } from '@/context/Weather/reducer';
import type { Lang, Unit } from '@/types';
import { localStorageKeys } from '@/constants';
import { locationService } from '@/api/location';

const WeatherContext = createContext<State | null>(null);
const WeatherDispatchContext = createContext<React.Dispatch<Action> | null>(null);

const initialState: State = {
  location: null,
  weather: null,
  status: 'idle',
  unit: 'metric',
};

const init = (state: State): State => {
  const locationLocalStorage = localStorage.getItem(localStorageKeys.location);
  const unitLocalStorage = localStorage.getItem(localStorageKeys.unit);

  return {
    ...state,
    unit: (unitLocalStorage as Unit | null) ?? state.unit,
    location: locationLocalStorage ? JSON.parse(locationLocalStorage) : state.location,
  };
};

const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init);
  const { i18n } = useTranslation();

  const lang = i18n.language as Lang;
  const { location, unit } = state;

  useEffect(() => {
    if (!location) return;

    const fetchWeather = async () => {
      dispatch({ type: actions.statusChanged, status: 'pending' });

      try {
        const data = await locationService.getWeather({ lat: location.lat, lon: location.lon, units: unit, lang });
        dispatch({ type: actions.dataReceived, weather: data });
      } catch (e) {
        console.error(e);
        dispatch({ type: actions.statusChanged, status: 'error' });
      }
    };

    fetchWeather();
  }, [location, unit, lang]);

  useEffect(() => {
    localStorage.setItem(localStorageKeys.location, JSON.stringify(location));
    localStorage.setItem(localStorageKeys.unit, unit);
  }, [location, unit]);

  return (
    <WeatherContext.Provider value={state}>
      <WeatherDispatchContext.Provider value={dispatch}>{children}</WeatherDispatchContext.Provider>
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error('useWeather has to be used within WeatherContext.Provider');
  return context;
};

const useWeatherDispatch = () => {
  const context = useContext(WeatherDispatchContext);
  if (!context) throw new Error('useWeatherDispatch has to be used within WeatherDispatchContext.Provider');
  return context;
};

// eslint-disable-next-line
export { useWeather, useWeatherDispatch };
export default WeatherProvider;
