import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';

import Router from 'router';
import reportWebVitals from './reportWebVitals';

import 'styles/index.scss';
import 'styles/global.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Router />
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
