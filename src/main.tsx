import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-f-4x-fhm.jp.auth0.com"
      clientId="3RxdYg4y0YMojsZu1JbKaiUmP5EwUjMh"
      redirectUri="http://localhost:3000"
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
