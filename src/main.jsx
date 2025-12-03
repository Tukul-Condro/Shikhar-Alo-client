import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { RouterProvider} from "react-router";
import { router } from './Routes/Routers';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    </ThemeProvider>  
      <RouterProvider router={router} />
  </StrictMode>,
)
