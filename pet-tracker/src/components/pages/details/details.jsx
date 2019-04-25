import React, { Component } from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Svgs } from 'resources';
import { Pet } from 'models/pet';
import { Animals as AnimalConsts } from 'app.constants';

class Details extends Component {
  constructor(props) {
    super(props);

    const pet = new Pet();
    pet.name = 'Chewy';
    pet.birthday = new Date(2017, 8, 24);
    pet.type = AnimalConsts.DOG;
    this.state = { pet: pet };
  }

  render() {
    const { pet } = this.state;
    return (
      <List>
        <ListItem>
          <ListItemIcon>
            <Svgs.Animals.Dog height={50} />
          </ListItemIcon>
          <ListItemText primary={pet.name} />
        </ListItem>
        <ListItem>
          <ListItemText primary={pet.birthday.toLocaleDateString()} />
        </ListItem>
        <ListItem>
          <ListItemText primary={pet.type} />
        </ListItem>
      </List>
    );
  }
}

export default Details;
