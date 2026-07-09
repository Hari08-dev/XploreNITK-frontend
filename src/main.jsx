import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EntityProvider } from './services/entities/entity.context.jsx'
import { AuthProvider } from './services/auth/auth.context.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <EntityProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EntityProvider>
    </AuthProvider>
  </StrictMode>
)