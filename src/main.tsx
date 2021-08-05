import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import { createClient, Provider } from 'urql';
import App from './App';

const client = createClient({
  url: 'http://localhost:4000/graphql',
});

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="apollo-server-prisma-todo-app.jp.auth0.com"
      clientId="aUD1RQ95pCRmKGITpCxnpcyk8wZFknjk"
      redirectUri="http://localhost:3000"
      audience="https://apollo-server-prisma-todo-app.eringiv3.com"
    >
      <ChakraProvider>
        <Provider value={client}>
          <App />
        </Provider>
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
