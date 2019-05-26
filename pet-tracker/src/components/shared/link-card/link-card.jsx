import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = theme => ({
  card: {
    display: 'flex',
    textDecoration: 'none'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  details: {
    display: 'flex',
    flex: 1
  },
  icon: {
    width: 151,
    padding: 5,
    textAlign: 'center'
  }
});

function LinkCard({ to, title, icon, children, classes }) {
  return (
    <Card>
      <Link to={to} className={classes.card}>
        <div className={classes.icon}>
          <em className={`fa fa-4x fa-${icon}`} />
        </div>
        <div className={classes.content}>
          <CardContent className={classes.details}>
            <Typography className='link-card__title' variant='h6'>
              {title}
            </Typography>
            <div className='link-card__body'>{children}</div>
          </CardContent>
        </div>
      </Link>
    </Card>
  );
}

LinkCard.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  children: PropTypes.any,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(LinkCard);
