import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Home,
  FoodContainer,
  ActivityContainer,
  PetDashboard
} from 'components/pages';
import { Grid } from '@material-ui/core';

function AppRouter() {
  return (
    <Grid container className='layout'>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/:petName/dashboard' component={PetDashboard} />
        <Route path='/:petName/food' component={FoodContainer} />
        <Route path='/:petName/activity' component={ActivityContainer} />
      </Router>
    </Grid>
  );
}

export default AppRouter;
