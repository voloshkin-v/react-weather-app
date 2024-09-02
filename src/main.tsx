import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './i18n';

import App from '@/App.tsx';
import WeatherProvider from '@/context/Weather';

import '@/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </StrictMode>,
);
