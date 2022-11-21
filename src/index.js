import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';

import App from './App';

// savoir si on est en prod ou en dev
const isDev = process.env.NODE_ENV === 'development';
console.log('isDev', isDev);

const root = ReactDOM.createRoot(
  document.getElementById('root') || document.body,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
