import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import RouterProvider from './provider.router';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider />
  </StrictMode>,
)
