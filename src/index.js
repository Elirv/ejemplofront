import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider 
      audience="https://express.sample" //apis, identifier
      domain="bernersmusicapp.eu.auth0.com" //aplication domain
      clientId="rcZ7YDCl4DIU1x02tuWqetoxWlG9kulN" //aplication
      redirectUri={'http://localhost:3000'} //donde redireciona el auth0 un avez compruebe k te has logueado /home por ejemplo
      >  
      <App />
    </Auth0Provider>
  </React.StrictMode>
);