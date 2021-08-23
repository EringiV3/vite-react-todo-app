import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import UnAuthRoute from './components/UnAuthRoute';
import CallbackScreen from './screnns/Callback';
import LoginScreen from './screnns/Login';
import TodoListScreen from './screnns/TodoList';

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={CallbackScreen} />
        <UnAuthRoute exact path="/login" component={LoginScreen} />
        <PrivateRoute exact path="/todo" component={TodoListScreen} />
      </Switch>
    </Router>
  );
};

export default App;
