import { languages, units } from '@/constants';

export type Status = 'idle' | 'pending' | 'success' | 'error';
export type Lang = keyof typeof languages;
export type Unit = keyof typeof units;

export interface Weather {
  lat: number;
  lon: number;
  current: {
    dt: number;
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
  hourly: {
    dt: number;
    temp: number;
    weather: {
      icon: string;
      description: string;
    };
  }[];
}

export interface Location {
  name: string;
  localNames: {
    [key: string]: string | null;
  };
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
