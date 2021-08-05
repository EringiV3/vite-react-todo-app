import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import React from 'react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button colorScheme="blue" onClick={() => loginWithRedirect()}>
      Login
    </Button>
  );
};

export default LoginButton;
