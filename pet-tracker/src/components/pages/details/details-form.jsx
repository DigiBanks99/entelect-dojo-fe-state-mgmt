import React, { Component } from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem
} from '@material-ui/core';
import { Animals as AnimalConsts } from 'app.constants';
import AnimalIcon from '../../shared/animal-icon/animal-icon';

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      type: AnimalConsts.DOG,
      birthDate: undefined
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  renderAnimalSelect() {
    return Object.keys(AnimalConsts).map(animalKey =>
      this.renderAnimalSelectOption(animalKey)
    );
  }

  renderAnimalSelectOption(animalKey) {
    return (
      <MenuItem value={AnimalConsts[animalKey]} key={animalKey}>
        <AnimalIcon animal={AnimalConsts[animalKey]} />
      </MenuItem>
    );
  }

  render() {
    const { name, birthDate, type } = this.state;
    return (
      <form noValidate>
        <TextField
          id='name'
          type='text'
          label='Name'
          value={name}
          onChange={this.handleChange}
        />
        <TextField
          id='date'
          type='date'
          label='Birth Date'
          value={birthDate}
          onChange={this.handleChange}
        />
        <FormControl>
          <InputLabel htmlFor='type'>Type</InputLabel>
          <Select
            value={type}
            onChange={this.handleChange}
            input={<Input id='type' name='type' />}
          >
            {this.renderAnimalSelect()}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export { DetailsForm };
