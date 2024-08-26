import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.css';
import { UnitProvider } from './context/UnitProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnitProvider>
      <App />
    </UnitProvider>
  </StrictMode>,
);
