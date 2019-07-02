import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { FoodService } from '../../services';

class FoodForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      petName: props.match.params.petName,
      description: undefined,
      date: undefined
    };

    this.handleChanges = this.handleChanges.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { petName, description, date } = this.state;
    const model = {
      id: 0,
      description,
      date
    };
    FoodService.instance.addFoodTransaction(petName, model);
  }

  handleChanges(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const { description, date, petName } = this.state;
    const to = `/${petName}/food`;
    return (
      <form noValidate>
        <TextField
          name='description'
          label='Description'
          type='text'
          value={description}
          onChange={this.handleChanges}
        />
        <TextField
          name='date'
          label='Date'
          type='date'
          value={date}
          onChange={this.handleChanges}
        />
        <Link to={to} onClick={this.handleSubmit}>
          <Button type='submit'>Save</Button>
        </Link>
      </form>
    );
  }
}

export default FoodForm;
