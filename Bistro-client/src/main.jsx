import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import { RouterProvider, } from "react-router-dom";
import { router } from './routers/Router.jsx';
import {  HelmetProvider } from 'react-helmet-async';
import AuthProviders from './Providers/AuthProviders.jsx';

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProviders>
  </StrictMode>,
)
