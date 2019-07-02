import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Fab, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  fab: {
    position: 'absolute',
    right: theme.spacing(2),
    bottom: theme.spacing(2)
  },
  fabLink: {
    textDecoration: 'none',
    color: theme.palette.background.paper
  }
});

function FabNew({ classes, to }) {
  return (
    <Fab className={classes.fab} color='secondary'>
      <Link to={to} className={classes.fabLink}>
        <AddIcon />
      </Link>
    </Fab>
  );
}

FabNew.propType = {
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
};

export default withStyles(styles, { withTheme: true })(FabNew);
