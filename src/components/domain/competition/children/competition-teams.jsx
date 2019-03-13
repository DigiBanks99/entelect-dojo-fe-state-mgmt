import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { TeamService } from 'services';
import { Image } from 'components/shared';

import './competition-teams.scss';

class CompetitionTeams extends Component {
  constructor(props) {
    super(props);

    this.state = {
      teams: []
    };

    this.fetchData(props.competition.id);
  }

  fetchData(id) {
    TeamService.getTeamsByCompetitionId(id).then(({ data }) => {
      this.setState({
        teams: data
      });
    });
  }

  renderCrest(url) {
    return <Image className='crest' src={url} height={50} />;
  }

  renderTeams(teams) {
    return teams.map(team => {
      const link = `/team/${team.id}`;

      return (
        <li className='team'>
          {this.renderCrest(team.crestUrl)}
          <Link className='name' to={link}>
            {team.name}
          </Link>
        </li>
      );
    });
  }

  render() {
    const { teams } = this.state;

    return (
      <div className='competition-teams'>
        <div className='caption'>Teams</div>
        <ul className='teams'>{this.renderTeams(teams)}</ul>
      </div>
    );
  }
}

export default CompetitionTeams;
