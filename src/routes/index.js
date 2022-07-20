import React, {Suspense, lazy} from 'react';

import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import PrivateRoute from './private';
import {ConnectedRouter} from 'connected-react-router';

import SignIn from 'src/pages/SignIn';
import Table from 'src/components/molecules/Table';
import history from './history';

const Dashboard = lazy(() => import('src/pages/Dashboard'));

const Example = () => {
  return (
    <Dashboard title={'Dashboard'}>
      <Table />
    </Dashboard>
  );
};

const Routes = () => (
  <Suspense fallback={<div />}>
    <ConnectedRouter history={history}>
      <Switch>
        <PrivateRoute path='/' exact component={SignIn} />

        <PrivateRoute path='/dashboard' exact component={Example} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
