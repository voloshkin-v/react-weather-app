import { cn } from '@/utils';

interface Props {
  icon: string;
  alt?: string;
  description?: string;
  className?: {
    container?: string;
    img?: string;
    caption?: string;
  };
}
const WeatherIcon = ({
  icon,
  description,
  alt = '',
  className: { caption = '', container = '', img = '' } = {},
}: Props) => {
  return (
    <figure className={cn('inline-flex items-center', container)}>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={alt} className={cn('size-12', img)} />
      {description && (
        <figcaption className={cn('text-xs text-secondary-foreground', caption)}>{description}</figcaption>
      )}
    </figure>
  );
};

export default WeatherIcon;
