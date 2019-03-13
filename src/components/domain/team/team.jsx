import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TeamService } from 'services';
import { Card } from 'components/shared';
import { TeamInfo, TeamPlayers } from './children';

import './team.scss';

class Team extends Component {
  constructor(props) {
    super(props);

    this.state = { team: null };

    this.fetchData(+props.match.params.id);
  }

  fetchData(id) {
    TeamService.getTeamById(id)
      .then(team => {
        this.setState({team});
      });
  }

  render() {
    const {team} = this.state;

    if (team === null)
      return null;

    return (
      <Card className='team'>
        <div className='card-header'>{team.name}</div>
        <div className='card-content'>
          <TeamInfo team={team} />
          <TeamPlayers team={team} />
        </div>
      </Card>
    );
  }
}

Team.propTypes = {
  team: PropTypes.object.isRequired
};

export default Team;
