import React, { Fragment } from 'react';
import { Header } from '..';
import { Route } from 'react-router-dom';

export const LayoutRoute = ({
  component: Component,
  exact,
  path,
  description
}) => (
  <Route
    path={path}
    exact={exact}
    render={routeProps => (
      <Fragment>
        <Header description={description} />
        <Component {...routeProps} />
      </Fragment>
    )}
  />
);
