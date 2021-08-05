import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  console.log({ user });

  return (
    <>
      {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      {user && (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      )}
    </>
  );
};

export default App;
