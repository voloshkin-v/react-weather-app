import { Location } from '@/types';

export const locationDict = new Map<number, Location[]>([
  [
    0,
    [
      {
        name: 'New York County',
        localNames: {
          en: 'New York',
          uk: 'Нью-Йорк',
        },
        lat: 40.7127281,
        lon: -74.0060152,
        country: 'US',
        state: 'New York',
      },
      {
        name: 'Madrid',
        localNames: {
          uk: 'Мадрид',
          en: 'Madrid',
        },
        lat: 40.4167047,
        lon: -3.7035825,
        country: 'ES',
        state: 'Community of Madrid',
      },
      {
        name: 'London',
        localNames: {
          en: 'London',
          uk: 'Лондон',
        },
        lat: 51.5073219,
        lon: -0.1276474,
        country: 'GB',
        state: 'England',
      },
    ],
  ],
  [
    1,
    [
      {
        name: 'Amsterdam',
        localNames: {
          uk: 'Амстердам',
          en: 'Amsterdam',
        },
        lat: 52.3727598,
        lon: 4.8936041,
        country: 'NL',
        state: 'North Holland',
      },
      {
        name: 'Kyiv',
        localNames: {
          en: 'Kyiv',
          uk: 'Київ',
        },
        lat: 50.4500336,
        lon: 30.5241361,
        country: 'UA',
      },
      {
        name: 'Brussels',
        localNames: {
          en: 'Brussels',
          uk: 'Брюссель',
        },
        lat: 50.8465573,
        lon: 4.351697,
        country: 'BE',
      },
    ],
  ],
  [
    2,
    [
      {
        name: 'Berlin',
        localNames: {
          uk: 'Берлін',
          en: 'Berlin',
        },
        lat: 52.5170365,
        lon: 13.3888599,
        country: 'DE',
      },
      {
        name: 'Lisbon',
        localNames: {
          en: 'Lisbon',
          uk: 'Лісабон',
        },
        lat: 38.7077507,
        lon: -9.1365919,
        country: 'PT',
      },
      {
        name: 'Ottawa',
        localNames: {
          en: 'Ottawa',
          uk: 'Оттава',
        },
        lat: 45.4208777,
        lon: -75.6901106,
        country: 'CA',
        state: 'Ontario',
      },
    ],
  ],
]);
