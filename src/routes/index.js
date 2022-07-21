import React, {Suspense, lazy} from 'react';

import {Switch} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import {useSelector} from 'react-redux';

import PublicRoute from 'src/components/atoms/PublicRoute';
import PrivateRoute from 'src/components/atoms/PrivateRoute';

import SignIn from 'src/pages/SignIn';
import Table from 'src/components/molecules/FamiliarTable';
import history from './history';

const Dashboard = lazy(() => import('src/components/layout/Dashboard'));

const Routes = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <Suspense fallback={<div />}>
      <ConnectedRouter history={history}>
        <Switch>
          <PublicRoute path='/' exact isAuthenticated={token}>
            <SignIn />
          </PublicRoute>

          <PrivateRoute path='/dashboard' exact isAuthenticated={token}>
            <Dashboard title={'Dashboard'} />
          </PrivateRoute>

          <PrivateRoute path='/familias' exact isAuthenticated={token}>
            <Dashboard title={'Dashboard'}>
              <Table />
            </Dashboard>
          </PrivateRoute>
        </Switch>
      </ConnectedRouter>
    </Suspense>
  );
};

export default Routes;
