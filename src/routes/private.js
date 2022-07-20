import React from 'react';
import {useSelector} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
  const token = useSelector((state) => state.auth.token);

  console.log(token);
  console.log(rest);

  if (rest.path === '/' && !token) {
    return <Redirect to={{pathname: '/', state: {from: rest.location}}} />;
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
      }
    />
  );
};

export default PrivateRoute;
