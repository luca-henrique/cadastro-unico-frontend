import React from 'react';

import {Route, Redirect} from 'react-router-dom';

import {store} from 'src/store';

const PrivateRoute = ({component: Component, ...rest}) => (
  <Route
    {...rest}
    render={(props) =>
      store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={{pathname: '/', state: {from: props.location}}} />
      )
    }
  />
);

export default PrivateRoute;
