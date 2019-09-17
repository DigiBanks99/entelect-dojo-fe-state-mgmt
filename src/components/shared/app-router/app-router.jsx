import {
  ActivityContainer,
  ActivityForm,
  Details,
  DetailsForm,
  FoodContainer,
  FoodForm,
  Home,
  PetDashboard
} from 'components/pages';
import React, { Fragment } from 'react';
import { LayoutRoute } from './layout-route';

function AppRouter() {
  return (
    <Fragment>
      <LayoutRoute path='/' exact component={Home} />
      <LayoutRoute path='/home' exact component={Home} />
      <LayoutRoute
        path='/:petName/details'
        exact
        component={Details}
        description='Details'
      />
      <LayoutRoute
        path='/new'
        exact
        component={DetailsForm}
        description='New pet'
      />
      <LayoutRoute
        path='/:petName/dashboard'
        exact
        component={PetDashboard}
        description='Dashboard'
      />
      <LayoutRoute
        path='/:petName/food'
        exact
        component={FoodContainer}
        description='Food'
      />
      <LayoutRoute
        path='/:petName/food/new'
        exact
        component={FoodForm}
        description='Feeding'
      />
      <LayoutRoute
        path='/:petName/activity'
        exact
        component={ActivityContainer}
        description='Activities'
      />
      <LayoutRoute
        path='/:petName/activity/new'
        exact
        component={ActivityForm}
        description='New activity'
      />
    </Fragment>
  );
}

export default AppRouter;
