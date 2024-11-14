import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { AppRouter } from '@vendor-master/router';
import { StoreProvider } from '@vendor-master/store';
import { ToastProvider } from '@vendor-master/toast';
import { ErrorBoundary } from '@vendor-master/layout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <ToastProvider>
          <AppRouter />
        </ToastProvider>
      </StoreProvider>
    </ErrorBoundary>
  </StrictMode>
);
