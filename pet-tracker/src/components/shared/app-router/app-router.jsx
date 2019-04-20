import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, FoodContainer, ActivityContainer } from 'components/pages';
import { Grid } from '@material-ui/core';

function AppRouter() {
  return (
    <Grid container>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/food' component={FoodContainer} />
        <Route path='/activity' component={ActivityContainer} />
      </Router>
    </Grid>
  );
}

export default AppRouter;
