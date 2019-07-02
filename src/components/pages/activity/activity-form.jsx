import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { ActivityService } from 'components/services/activity.service';

class ActivityForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      description: undefined,
      date: undefined,
      petName: this.props.match.params.petName
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { id, description, date, petName } = this.state;
    ActivityService.instance.addActivity(petName, {
      id,
      description,
      date: new Date(date)
    });
  }

  render() {
    const to = `/${this.state.petName}/dashboard`;
    return (
      <form noValidate>
        <TextField
          name='description'
          label='Description'
          onChange={this.handleChange}
        />
        <TextField
          name='date'
          label='Date'
          type='date'
          onChange={this.handleChange}
        />
        <Link to={to} onClick={this.handleSubmit}>
          <Button type='submit'>Save</Button>
        </Link>
      </form>
    );
  }
}

export { ActivityForm };
