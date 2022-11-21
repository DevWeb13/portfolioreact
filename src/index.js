import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import App from './App';

const isDev = process.env.NODE_ENV === 'development';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') || document.body,
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App isDev={isDev} />
      {isDev && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  </React.StrictMode>,
);
