import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, ListItemIcon, ListItemText } from '@material-ui/core';
import { ListItemLink } from 'components/shared';

const styles = () => ({
  container: {
    display: 'flex',
    textDecoration: 'none'
  },
  icon: {
    width: 151,
    padding: 5,
    textAlign: 'center'
  }
});

function LinkCard({ to, title, icon, classes }) {
  return (
    <ListItemLink to={to} className={classes.container}>
      <ListItemIcon className={classes.icon}>
        <em className={`fa fa-4x fa-${icon}`} />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItemLink>
  );
}

LinkCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.any,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinkCard);
