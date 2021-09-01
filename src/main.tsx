import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthorizedUrqlProvider from './components/AuthorizedUrqlProvider';
import {
  AUTH0_AUDIENCE,
  AUTH0_CLIENT_ID,
  AUTH0_DOMAIN,
  AUTH0_REDIRECT_URI,
} from './config/constants';

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={AUTH0_REDIRECT_URI}
      audience={AUTH0_AUDIENCE}
    >
      <ChakraProvider>
        <AuthorizedUrqlProvider>
          <App />
        </AuthorizedUrqlProvider>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
