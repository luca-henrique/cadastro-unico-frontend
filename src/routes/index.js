import React, {Suspense, lazy} from 'react';

import {Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

import SignIn from 'src/components/organisms/SignIn/';
import history from './history';

const License = lazy(() => import('src/pages/License/index'));

const Routes = () => (
  <Suspense fallback={<div />}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' exact component={SignIn} />
        <Route path='/license' exact component={License} />
      </Switch>
    </ConnectedRouter>
  </Suspense>
);

export default Routes;
