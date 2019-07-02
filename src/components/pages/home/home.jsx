import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles, ListItem, List, ListItemText } from '@material-ui/core';
import { AnimalService } from 'components/services';
import { ListItemLink, FabNew } from 'components/shared';

const styles = theme => ({
  list: {
    backgroundColor: theme.palette.background.paper
  }
});

function PetListItem({ name }) {
  return (
    <ListItem key={name}>
      <ListItemLink to={`/${name}/dashboard`}>
        <ListItemText primary={name} />
      </ListItemLink>
    </ListItem>
  );
}

class Home extends Component {
  renderPets(pets = []) {
    return pets.map(pet => <PetListItem key={pet.name} {...pet} />);
  }

  render() {
    const { classes } = this.props;
    const pets = AnimalService.instance.getAnimals();
    return (
      <Fragment>
        <List justify='center' className={classes.list}>
          {this.renderPets(pets)}
        </List>
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
