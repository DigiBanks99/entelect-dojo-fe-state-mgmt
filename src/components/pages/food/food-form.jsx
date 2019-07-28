import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, TextField, withStyles } from '@material-ui/core';
import { FoodService } from 'components/services';

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

class FoodFormWithStyles extends Component {
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
    const { classes } = this.props;
    return (
      <form noValidate className={classes.form}>
        <TextField
          fullWidth
          name='description'
          label='Description'
          type='text'
          value={description}
          onChange={this.handleChanges}
        />
        <TextField
          fullWidth
          name='date'
          label='Date'
          type='date'
          value={date}
          onChange={this.handleChanges}
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

FoodFormWithStyles.propTypes = {
  classes: PropTypes.shape({
    form: PropTypes.object,
    button: PropTypes.object,
    buttonLink: PropTypes.object
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      petName: PropTypes.string
    })
  })
};

const FoodForm = withStyles(styles)(FoodFormWithStyles);
export default FoodForm;
