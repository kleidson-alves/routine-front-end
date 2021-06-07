import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import NewRoutine from '../pages/NewRoutine';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/home" exact isPrivate component={Home} />
    <Route path="/newroutine" exact isPrivate component={NewRoutine} />
  </Switch>
);

export default Routes;
