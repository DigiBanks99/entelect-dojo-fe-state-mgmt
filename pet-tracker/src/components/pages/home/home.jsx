import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid, Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { AnimalService } from '../../services/animal.service';

const styles = theme => ({
  fab: {
    position: 'absolute',
    right: 2 * theme.spacing.unit,
    bottom: 2 * theme.spacing.unit
  },
  fabLink: {
    textDecoration: 'none',
    color: theme.palette.background.paper
  }
});

class Home extends Component {
  renderPets(pets = []) {
    return pets.map(pet => (
      <Grid item key={pet.name}>
        <Link to={`/${pet.name}/dashboard`}>{pet.name}</Link>
      </Grid>
    ));
  }

  render() {
    const { classes } = this.props;
    const pets = AnimalService.instance.getAnimals();
    return (
      <Grid container className='home' direction='column' spacing={8}>
        {this.renderPets(pets)}
        <Fab className={classes.fab} color='secondary'>
          <Link to='/new' className={classes.fabLink}>
            <AddIcon />
          </Link>
        </Fab>
      </Grid>
    );
  }
}

Home.propType = {
  classes: PropTypes.object.isRequired,
  pets: PropTypes.array
};

Home.defaultProps = {
  pets: []
};

export default withStyles(styles, { withTheme: true })(Home);
