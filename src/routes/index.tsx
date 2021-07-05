import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Routines from '../pages/Routines';
import ForgotPassword from '../pages/ForgotPassword';
import NewRoutine from '../pages/NewRoutine';

export const Routes: React.FC = () => (
  <Switch>
    <Route path="/signin" exact component={SignIn} />
    <Route path="/signup" exact component={SignUp} />
    <Route path="/forgot" exact component={ForgotPassword} />
    <Route path="/" isPrivate exact component={Home} />
    <Route path="/profile" isPrivate exact component={Profile} />
    <Route path="/routines" isPrivate exact component={Routines} />
    <Route path="/newroutine" isPrivate exact component={NewRoutine} />
  </Switch>
);

export default Routes;
