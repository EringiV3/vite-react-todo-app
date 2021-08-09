import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@chakra-ui/button';
import React from 'react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      colorScheme="blue"
      onClick={() => logout({ returnTo: `${window.location.origin}/login` })}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
