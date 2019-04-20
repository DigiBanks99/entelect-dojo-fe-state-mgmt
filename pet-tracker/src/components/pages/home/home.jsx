import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { LinkCard } from 'components/shared';

class Home extends Component {
  render() {
    return (
      <Grid container className='home' direction='column' spacing={8}>
        <Grid item>
          <LinkCard to='/food' title='Food' icon='bone' />
        </Grid>
        <Grid item>
          <LinkCard to='/activity' title='Activities' icon='baseball-ball' />
        </Grid>
      </Grid>
    );
  }
}

export default Home;
