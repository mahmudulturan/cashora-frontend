import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import MainRoutes from './routes/main-routes.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from './components/ui/toaster.tsx'
import AuthProvider from './providers/auth-provider.tsx'
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Toaster />
        <AuthProvider>
          <MainRoutes />
        </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
