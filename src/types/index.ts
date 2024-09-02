import { languages } from '@/constants';

export type Unit = 'metric' | 'imperial';
export type Status = 'idle' | 'pending' | 'success' | 'error';
export type Lang = keyof typeof languages;

export interface Weather {
  lat: number;
  lon: number;
  timeZone: string;
  current: {
    feelsLike: number;
    windSpeed: number;
    temp: {
      now: number;
      min: number;
      max: number;
    };
    weather: {
      icon: string;
      description: string;
    };
  };
}

export interface Location {
  name: string;
  local_names?: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
