import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = props;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ pets: nextProps.pets });
  }

  renderPets(pets = []) {
    return pets.map(pet => (
      <Grid item key={pet.name}>
        <Link to={`/${pet.name}/dashboard`}>{pet.name}</Link>
      </Grid>
    ));
  }

  render() {
    const { pets } = this.state;
    return (
      <Grid container className='home' direction='column' spacing={8}>
        {this.renderPets(pets)}
      </Grid>
    );
  }
}

Home.propType = {
  pets: PropTypes.array
};

Home.defaultProps = {
  pets: [{ name: 'Chewy' }, { name: 'Lika' }, { name: 'Crookshanks' }]
};

export default Home;
