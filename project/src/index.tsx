import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getOffers } from './mocks/mocks';

const DEFAULT_OFFERS_COUNT = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockOffers = getOffers(DEFAULT_OFFERS_COUNT);

root.render(
  <React.StrictMode>
    <App offers={mockOffers} />
  </React.StrictMode>,
);
