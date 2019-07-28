import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { LinkCard } from 'components/shared';

class PetDashboard extends Component {
  render() {
    const {
      match: {
        params: { petName }
      }
    } = this.props;

    return (
      <List>
        <LinkCard to={`/${petName}/details`} title='Details' icon='tags' />
        <LinkCard to={`/${petName}/food`} title='Food' icon='bone' />
        <LinkCard
          to={`/${petName}/activity`}
          title='Activities'
          icon='baseball-ball'
        />
      </List>
    );
  }
}

PetDashboard.propType = {
  petName: PropTypes.string.isRequired
};

export default PetDashboard;
