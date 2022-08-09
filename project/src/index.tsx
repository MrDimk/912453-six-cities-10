import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { getOffers } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const mockOffers = getOffers();

root.render(
  <React.StrictMode>
    <App offers={mockOffers} />
  </React.StrictMode>,
);
