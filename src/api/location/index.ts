import { apiClient } from '@/api/client';
import type { LocationCoordsAPI, LocationWeatherAPI } from '@/api/types';
import type { Lang, Unit } from '@/types';

class LocationService {
  async getWeather(params: { lat: number; lon: number; units: Unit; lang: Lang }) {
    const { data } = await apiClient.get<LocationWeatherAPI>('/data/3.0/onecall', {
      params,
    });

    return this.#transformWeather(data);
  }

  async getCoordsByName(location: string) {
    const { data } = await apiClient.get<LocationCoordsAPI[]>('/geo/1.0/direct', {
      params: {
        q: location,
        limit: 3,
      },
    });

    return this.#transformCoords(data);
  }

  async getLocationByCoords(params: { lat: number; lon: number }) {
    const { data } = await apiClient.get<LocationCoordsAPI[]>('/geo/1.0/reverse', {
      params,
    });

    return this.#transformCoords(data);
  }

  #transformCoords = (data: LocationCoordsAPI[]) => {
    return data.map((coords) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { local_names, ...rest } = coords;

      return {
        ...rest,
        localNames: {
          en: coords.local_names?.en || null,
          uk: coords.local_names?.uk || null,
        },
      };
    });
  };

  #transformWeather = (data: LocationWeatherAPI) => {
    return {
      lat: data.lat,
      lon: data.lon,
      current: {
        dt: data.current.dt,
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
      hourly: [0, 3, 6, 9, 12, 15, 18, 21].map((index) => ({
        dt: data.hourly[index].dt,
        temp: Math.round(data.hourly[index].temp),
        weather: {
          icon: data.hourly[index].weather.at(0)!.icon,
          description: data.hourly[index].weather.at(0)!.description,
        },
      })),
      daily: data.daily.map((data) => ({
        dt: data.dt,
        temp: {
          min: Math.round(data.temp.min),
          max: Math.round(data.temp.max),
        },
        weather: {
          icon: data.weather.at(0)!.icon,
          description: data.weather.at(0)!.description,
        },
      })),
    };
  };
}

export const locationService = new LocationService();
