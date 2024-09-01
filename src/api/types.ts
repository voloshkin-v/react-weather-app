export interface LocationWeatherAPI {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Current;
  hourly: Hourly[];
  daily: Daily[];
}

interface Common {
  dt: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust?: number;
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
}

interface Precipitation {
  '1h'?: number;
}

interface Current extends Common {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  visibility: number;
  rain?: Precipitation;
  snow?: Precipitation;
}

interface Hourly extends Common {
  temp: number;
  feels_like: number;
  visibility: number;
  pop: number;
  rain?: Precipitation;
  snow?: Precipitation;
}

interface Daily extends Common {
  sunrise: number;
  sunset: number;
  moonrise: number;
  moonset: number;
  moon_phase: number;
  summary: string;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  feels_like: {
    day: number;
    night: number;
    eve: number;
    morn: number;
  };
  pop: number;
  rain?: number;
  snow?: number;
}
