import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { LinkCard } from 'components/shared';

class PetDashboard extends Component {
  render() {
    const {
      match: {
        params: { petName }
      }
    } = this.props;
    console.log(this.props);
    return (
      <Grid container className='home' direction='column' spacing={8}>
        <Grid item>
          <LinkCard to={`/${petName}/details`} title='Details' icon='tags' />
        </Grid>
        <Grid item>
          <LinkCard to={`/${petName}/food`} title='Food' icon='bone' />
        </Grid>
        <Grid item>
          <LinkCard
            to={`/${petName}/activity`}
            title='Activities'
            icon='baseball-ball'
          />
        </Grid>
      </Grid>
    );
  }
}

PetDashboard.propType = {
  petName: PropTypes.string.isRequired
};

export default PetDashboard;
