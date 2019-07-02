import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { ActivityService } from 'components/services';
import { FabNew } from 'components/shared';

class Activity extends Component {
  constructor(props) {
    super(props);

    const petName = this.props.match.params.petName;
    this.state = {
      petName: petName
    };
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
    const { petName } = this.state;
    const activities = ActivityService.instance.getActivities(petName);
    return (
      <Fragment>
        <List>{this.renderActivities(activities)}</List>
        <FabNew to={`/${petName}/activity/new`} />
      </Fragment>
    );
  }
}

Activity.propType = {
  classes: PropTypes.object.isRequired
};

export default Activity;
