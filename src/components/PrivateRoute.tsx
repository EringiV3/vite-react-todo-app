import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@chakra-ui/react';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { user, isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  if (user !== undefined) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
