import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useQuery } from 'urql';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import { getTodoQuery } from './graphql/query/getTodos';
import type {
  GetTodosQuery,
  GetTodosQueryVariables,
} from './types/generated/graphql';

const App = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [{ data, fetching, error }, reexecuteQuery] = useQuery<
    GetTodosQuery,
    GetTodosQueryVariables
  >({
    query: getTodoQuery,
  });

  console.log({
    data,
    fetching,
    error,
  });

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
