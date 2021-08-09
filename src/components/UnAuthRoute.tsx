import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

const UnAuthRoute: React.FC<RouteProps> = ({ ...props }) => {
  const { user } = useAuth0();
  if (user) {
    return <Redirect to="/" />;
  } else {
    return <Route {...props} />;
  }
};

export default UnAuthRoute;
