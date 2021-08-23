import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return <Redirect to="/" />;
  } else {
    return <Route {...props} />;
  }
};

export default UnAuthRoute;
