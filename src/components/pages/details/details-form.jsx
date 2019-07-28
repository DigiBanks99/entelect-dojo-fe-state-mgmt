import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
  Button
} from '@material-ui/core';
import { Animals as AnimalConsts } from 'app.constants';
import AnimalIcon from 'components/shared/animal-icon/animal-icon';
import { AnimalService } from 'components/services/animal.service';

class DetailsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: undefined,
      type: AnimalConsts.DOG,
      birthDate: undefined
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    AnimalService.instance.updateAnimal({
      ...this.state,
      birthday: new Date(this.state.birthday)
    });
  }

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
    const { type, name } = this.state;
    const to = `/${name}/dashboard`;
    return (
      <form noValidate>
        <TextField name='name' label='Name' onChange={this.handleChange} />
        <TextField
          name='birthday'
          type='date'
          label='Birth Date'
          onChange={this.handleChange}
        />
        <FormControl>
          <InputLabel htmlFor='type'>Type</InputLabel>
          <Select
            value={type}
            onChange={this.handleChange}
            input={<Input id='type' name='type' />}>
            {this.renderAnimalSelect()}
          </Select>
        </FormControl>
        <Link to={to} onClick={this.handleSubmit}>
          <Button type='submit'>Save</Button>
        </Link>
      </form>
    );
  }
}

export { DetailsForm };
