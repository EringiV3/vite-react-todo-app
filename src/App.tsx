import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { useQuery } from 'urql';
import PrivateRoute from './components/PrivateRoute';
import UnAuthRoute from './components/UnAuthRoute';
import { getTodoQuery } from './graphql/query/getTodos';
import CallbackScreen from './screnns/Callback';
import LoginScreen from './screnns/Login';
import TodoListScreen from './screnns/TodoList';
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
    <Router>
      <Switch>
        <UnAuthRoute exact path="/login" component={LoginScreen} />
        <PrivateRoute exact path="/todo" component={TodoListScreen} />
        <PrivateRoute exact path="/" component={CallbackScreen} />
      </Switch>
    </Router>
  );
};

export default App;
