import { twMerge } from 'tailwind-merge';

export const cn = (...classNames: string[]) => {
  return twMerge(classNames);
};
