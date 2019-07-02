import React, { Component } from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles
} from '@material-ui/core';
import { AnimalService } from 'components/services';
import { AnimalIcon } from 'components/shared';

const styles = () => ({
  container: {
    display: 'flex',
    textDecoration: 'none'
  },
  icon: {
    width: 151,
    padding: 5,
    textAlign: 'center'
  }
});

class Details extends Component {
  render() {
    const name = this.props.match.params.petName;
    const classes = this.props.classes;
    const pet = AnimalService.instance.getAnimal(name);
    return (
      <List>
        <ListItem className={classes.container}>
          <ListItemIcon className={classes.icon}>
            <AnimalIcon animal={pet.type} />
          </ListItemIcon>
          <ListItemText
            primary={pet.name}
            secondary={pet.birthday.toLocaleDateString()}
          />
        </ListItem>
      </List>
    );
  }
}

export default withStyles(styles)(Details);
