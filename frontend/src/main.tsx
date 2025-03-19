import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import { AppRoutes } from './routes/routes.tsx';
import { TanStackQueryProvider } from './providers/tan-stack-query-provider.tsx';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanStackQueryProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TanStackQueryProvider>
  </StrictMode>
);
