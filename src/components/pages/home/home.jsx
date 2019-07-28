import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  List,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { AnimalService } from 'components/services';
import { ListItemLink, FabNew } from 'components/shared';
import AnimalIcon from '../../shared/animal-icon/animal-icon';

const styles = theme => ({
  list: {
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    width: 151,
    padding: 5,
    textAlign: 'center'
  }
});

function PetListItem({ name, type, className }) {
  return (
    <ListItemLink to={`/${name}/dashboard`}>
      <ListItemIcon className={className}>
        <AnimalIcon animal={type} height={80} width={80} />
      </ListItemIcon>
      <ListItemText primary={name} />
    </ListItemLink>
  );
}

class Home extends Component {
  renderPets(pets = [], classes = {}) {
    return pets.map(pet => (
      <PetListItem key={pet.name} {...pet} className={classes.icon} />
    ));
  }

  render() {
    const { classes } = this.props;
    const pets = AnimalService.instance.getAnimals();
    return (
      <Fragment>
        <List className={classes.list}>{this.renderPets(pets, classes)}</List>
        <FabNew to='/new' />
      </Fragment>
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

PetListItem.propType = {
  name: PropTypes.string.isRequired
};

export default withStyles(styles)(Home);
