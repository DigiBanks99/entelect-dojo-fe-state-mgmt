import React, { Fragment } from 'react';
import { Typography, withStyles } from '@material-ui/core';
import AnimalIcon from '../animal-icon/animal-icon';
import { GoBack } from '..';

const styles = theme => ({
  petName: {
    padding: 5
  }
});

const HeaderAnimalBase = ({ type, petName, classes, description }) => (
  <Fragment>
    <GoBack />
    {type && <AnimalIcon animal={type} />}
    <Typography variant='h6' color='inherit' className={classes.petName}>
      {petName}
      {description ? ': ' + description : ''}
    </Typography>
  </Fragment>
);

export const HeaderAnimal = withStyles(styles)(HeaderAnimalBase);
