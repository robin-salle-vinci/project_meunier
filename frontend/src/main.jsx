import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLoader from './components/App/AppLoader.jsx';
import './main.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLoader />,
    children: [
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />  
  </StrictMode>,
)
