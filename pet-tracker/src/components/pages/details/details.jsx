import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { AnimalService } from '../../services';
import AnimalIcon from '../../shared/animal-icon/animal-icon';

class Details extends Component {
  render() {
    const name = this.props.match.params.petName;
    const pet = AnimalService.instance.getAnimal(name);
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <AnimalIcon animal={pet.type} />
          </ListItemIcon>
          <ListItemText primary={pet.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary={pet.birthday.toLocaleDateString()} />
        </ListItem>
      </List>
    );
  }
}

export default Details;
