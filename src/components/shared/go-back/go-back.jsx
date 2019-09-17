import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core';

const styles = _ => ({
  button: {
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

const GoBack = ({ history, classes }) => {
  const handleGoBack = () => history.goBack();
  return (
    <div className={classes.button}>
      <KeyboardBackspace onClick={handleGoBack} />
    </div>
  );
};

export default withStyles(styles)(withRouter(GoBack));
