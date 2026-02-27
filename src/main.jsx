import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider} from "react-router";
import { router } from './Routes/Routers';
import AuthProvider from './ProviderContext/AuthProvider';
import { QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient(); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
         <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider> 
      </AuthProvider>
    </ThemeProvider>  
  </StrictMode>,
)
