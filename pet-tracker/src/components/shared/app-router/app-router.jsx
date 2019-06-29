import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  FoodContainer,
  FoodForm,
  ActivityContainer,
  ActivityForm,
  PetDashboard,
  Details,
  DetailsForm
} from 'components/pages';
import { Grid } from '@material-ui/core';

function AppRouter() {
  return (
    <Grid container className='layout'>
      <Route path='/' exact component={Home} />
      <Route path='/home' exact component={Home} />
      <Route path='/:petName/details' exact component={Details} />
      <Route path='/new' exact component={DetailsForm} />
      <Route path='/:petName/dashboard' exact component={PetDashboard} />
      <Route path='/:petName/food' exact component={FoodContainer} />
      <Route path='/:petName/food/new' exact component={FoodForm} />
      <Route path='/:petName/activity' exact component={ActivityContainer} />
      <Route path='/:petName/activity/new' exact component={ActivityForm} />
    </Grid>
  );
}

export default AppRouter;
