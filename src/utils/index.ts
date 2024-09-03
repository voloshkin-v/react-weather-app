import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: string[]) => {
  return twMerge(classNames);
};

export const getDate = (timestamp: number) => new Date(timestamp * 1000);

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
};
