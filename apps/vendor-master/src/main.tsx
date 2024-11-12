import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import { AppRouter } from '@vendor-master/router';
import { StoreProvider } from '@vendor-master/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <StoreProvider>
      <AppRouter />
    </StoreProvider>
  </StrictMode>
);
