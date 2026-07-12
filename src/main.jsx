import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { EntityProvider } from './services/entities/entity.context.jsx'
import { AuthProvider } from './services/auth/auth.context.jsx'
import { GoogleOAuthProvider } from "@react-oauth/google";

createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <EntityProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </EntityProvider>
    </AuthProvider>
    </GoogleOAuthProvider>
);