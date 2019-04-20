import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, withStyles } from '@material-ui/core';

const styles = theme => ({});

class Activity extends Component {
  render() {
    return (
      <Grid className='activity' item>
        Activity
      </Grid>
    );
  }
}

Activity.propType = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Activity);
