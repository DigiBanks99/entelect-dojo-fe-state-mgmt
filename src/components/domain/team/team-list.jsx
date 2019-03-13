import React, { Component } from 'react';

import { TeamService } from 'services';
import { Card, Filter } from 'components/shared';
import { TeamListItem } from './children';

import './team-list.scss';

class TeamList extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props, current: 'All', teams: [], descriptions: [] };

    this.filterChanged = this.filterChanged.bind(this);

    this.fetchData();
  }

  fetchData() {
    TeamService.getAllTeams().then(response => {
      const descriptions = this.getAreas(response.data);

      this.setState({
        teams: response.data,
        descriptions
      });
    });
  }

  getAreas(teams = []) {
    const initial = ['All'];
    const areas = teams.map(team => team.area.name);
    if (teams.length === 0) return initial;

    return [
      ...initial,
      ...areas.reduce((allAreas = [], area) => {
        if (!allAreas.includes(area)) {
          allAreas.push(area);
        }
        return allAreas;
      }, [])
    ];
  }

  filterChanged(value) {
    this.setState({ current: value });

    TeamService.getTeamsByArea(value).then(response => {
      this.setState({
        teams: response.data
      });
    });
  }

  renderTeamListHeader() {
    return (
      <li className='team-list-header'>
        <div className='team-name'>Name</div>
        <div className='team-crest'>Crest</div>
        <div className='team-founded'>Founded</div>
        <div className='team-country'>Country</div>
      </li>
    );
  }

  renderTeams(teams = []) {
    return teams.map(team => <TeamListItem team={team} key={team.id} />);
  }

  render() {
    const { teams = [], current = 'All', descriptions = [] } = this.state;

    return (
      <Card className='team-list'>
        <div className='card-header'>
          <span className='text'>Team List: </span>
          <Filter
            descriptions={descriptions}
            current={current}
            onChange={this.filterChanged}
          />
        </div>
        <div className='card-content'>
          <ul>
            {this.renderTeamListHeader()}
            {this.renderTeams(teams)}
          </ul>
        </div>
        <div className='card-footer'>Count: {teams.length}</div>
      </Card>
    );
  }
}

export default TeamList;
