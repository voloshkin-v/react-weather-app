import { apiClient } from '../client';
import { LocationCoords, LocationForecast } from '../types';

class LocationService {
  async getForecast({ lat, lon, units }: { lat: number; lon: number; units: string }) {
    // const response = await apiClient.get<LocationForecast>('/data/2.5/weather', {
    //   params: {
    //     lat,
    //     lon,
    //     units,
    //   },
    // });
    // return response.data;
  }

  async getCoords(location: string) {
    const response = await apiClient.get<LocationCoords[]>('/geo/1.0/direct', {
      params: {
        q: location,
      },
    });

    console.log('response', response);

    const [coords] = response.data;

    return coords;
  }
}

export const locationService = new LocationService();
