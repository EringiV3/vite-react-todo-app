import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const PrivateRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { user } = useAuth0();
  if (user !== undefined) {
    return <Route {...props} />;
  } else {
    return <Redirect to="/login" />;
  }
};

export default PrivateRoute;
