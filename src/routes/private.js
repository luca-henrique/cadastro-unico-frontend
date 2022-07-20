import React from 'react';
import {useSelector} from 'react-redux';

import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({isPrivate, component: Component, ...rest}) => {
  const token = useSelector((state) => state.auth.token);

  console.log(isPrivate);

  if (token) {
    return <Route render={(props) => <Component {...props} />} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <Redirect to={{pathname: '/', state: {from: props.location}}} />
      )}
    />
  );
};

export default PrivateRoute;
