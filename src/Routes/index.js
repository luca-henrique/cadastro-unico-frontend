import React from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SignIn from '../pages/SignIn/index';

const Container = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={SignIn} />
    </Switch>
  </Router>
);

export default Container;
