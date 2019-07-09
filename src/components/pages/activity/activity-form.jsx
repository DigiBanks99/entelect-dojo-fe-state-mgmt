import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TextField, Button, withStyles } from '@material-ui/core';
import { ActivityService } from 'components/services/activity.service';

const styles = theme => ({
  form: {
    padding: theme.spacing(2)
  },
  button: {
    color: theme.palette.background.paper,
    marginTop: theme.spacing(2)
  },
  buttonLink: {
    textDecoration: 'none'
  }
});

class ActivityFormWithStyles extends Component {
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
    const { classes } = this.props;
    return (
      <form noValidate className={classes.form}>
        <TextField
          fullWidth
          name='description'
          label='Description'
          onChange={this.handleChange}
        />
        <TextField
          fullWidth
          name='date'
          label='Date'
          type='date'
          onChange={this.handleChange}
        />
        <Link
          to={to}
          onClick={this.handleSubmit}
          className={classes.buttonLink}>
          <Button
            type='submit'
            variant='contained'
            className={classes.button}
            color='secondary'>
            Save
          </Button>
        </Link>
      </form>
    );
  }
}

const ActivityForm = withStyles(styles)(ActivityFormWithStyles);
export { ActivityForm };
