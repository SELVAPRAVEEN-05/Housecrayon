import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './Routes/App.jsx'
import Route from './Routes/Route.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
