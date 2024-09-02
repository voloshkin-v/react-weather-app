import { apiClient } from '@/api/client';
import type { LocationWeatherAPI } from '@/api/types';
import type { Lang, Location, Unit } from '@/types';

class LocationService {
  async getWeather(params: { lat: number; lon: number; units: Unit; lang: Lang }) {
    const { data } = await apiClient.get<LocationWeatherAPI>('/data/3.0/onecall', {
      params,
    });

    return this.#transformWeather(data);
  }

  async getCoordsByName(location: string) {
    const { data } = await apiClient.get<Location[]>('/geo/1.0/direct', {
      params: {
        q: location,
        limit: 3,
      },
    });

    return data;
  }

  async getLocationByCoords(params: { lat: number; lon: number }) {
    const { data } = await apiClient.get<Location[]>('/geo/1.0/reverse', {
      params,
    });

    return data;
  }

  #transformWeather = (data: LocationWeatherAPI) => {
    return {
      lat: data.lat,
      lon: data.lon,
      timeZone: data.timezone,
      current: {
        feelsLike: Math.round(data.current.feels_like),
        windSpeed: data.current.wind_speed,
        temp: {
          now: Math.round(data.current.temp),
          min: Math.round(data.daily.at(0)!.temp.min),
          max: Math.round(data.daily.at(0)!.temp.max),
        },
        weather: {
          icon: data.current.weather.at(0)!.icon,
          description: data.current.weather.at(0)!.description,
        },
      },
      // TODO
    };
  };
}

export const locationService = new LocationService();
