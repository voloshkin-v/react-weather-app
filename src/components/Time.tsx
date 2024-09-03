import { useTranslation } from 'react-i18next';
import { cn, getDate } from '@/utils';

interface Props {
  timestamp: number;
  className?: string;
}

const Time = ({ timestamp, className = '' }: Props) => {
  const { i18n } = useTranslation();

  const date = getDate(timestamp);
  const formattedTime = new Intl.DateTimeFormat(i18n.language, {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  // Time without am, pm
  const dateTime = formattedTime.slice(0, 5);

  return (
    <time className={cn('block text-xs', className)} dateTime={dateTime}>
      {formattedTime}
    </time>
  );
};

export default Time;
