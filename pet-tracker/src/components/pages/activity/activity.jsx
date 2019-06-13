import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Grid,
  Fab,
  withStyles,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { ActivityService } from '../../services';
import { ActivityModel } from '../../../models/activity';

const styles = theme => ({
  fab: {
    position: 'absolute',
    right: 2 * theme.spacing.unit,
    bottom: 2 * theme.spacing.unit
  },
  fabLink: {
    textDecoration: 'none',
    color: theme.palette.background.paper
  }
});

class Activity extends Component {
  constructor(props) {
    super(props);

    const petName = this.props.match.params.petName;
    this.state = {
      petName: petName
    };
    const act = new ActivityModel();
    act.date = new Date();
    act.description = 'Some activity';
    ActivityService.instance.addActivity(petName, act);
  }

  renderActivities(activities) {
    return activities.map(activity => (
      <ListItem key={activity.id}>
        <ListItemText
          primary={activity.description}
          secondary={activity.date.toLocaleDateString()}
        />
      </ListItem>
    ));
  }

  render() {
    const { classes } = this.props;
    const { petName } = this.state;
    const activities = ActivityService.instance.getActivities(petName);
    return (
      <Grid className='activity' item>
        <List>{this.renderActivities(activities)}</List>
        <Fab className={classes.fab} color='secondary'>
          <Link to='activity/new' className={classes.fabLink}>
            <AddIcon />
          </Link>
        </Fab>
      </Grid>
    );
  }
}

Activity.propType = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Activity);
