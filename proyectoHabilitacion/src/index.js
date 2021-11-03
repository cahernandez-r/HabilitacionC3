import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from "@auth0/auth0-react";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider //Almacena estado de autenticación de los usuarios y provee métodos para loguear y desloguear
      domain="dev-0-u6kb3f.us.auth0.com"
      clientId="uUw26a6yz0HnxMPDYqGYXXMuUEELeipv"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
