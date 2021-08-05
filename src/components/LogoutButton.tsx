import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import React from 'react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      colorScheme="teal"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
