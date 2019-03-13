import React, { Component } from 'react';

import { PlayerService } from 'services';
import { Card, Filter } from 'components/shared';
import { PlayerListItem } from './children';

import './player-list.scss';

class PlayerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: [],
      current: 'All',
      teams: ['All']
    };

    this.filterChanged = this.filterChanged.bind(this);

    this.fetchData();
  }

  fetchData() {
    PlayerService.getAllPlayers()
      .then(({ data }) => {
        const teams = this.getTeams(data);

        this.setState({
          players: data,
          teams
        });
      });
  }

  filterChanged(value) {
    this.setState({ current: value });

    PlayerService.getPlayerByTeam(value)
      .then(({ data }) => {
        this.setState({
          players: data
        });
      });
  }

  getTeams(players = []) {
    return [
      ...this.state.teams,
      ...players
        .map(player => player.teamName)
        .reduce((accumulator, currentValue) => {
          if (accumulator.indexOf(currentValue) < 0)
            accumulator.push(currentValue);
          return accumulator;
        }, [])
    ];
  }

  renderPlayerList(players) {
    return players.map(player => (
      <PlayerListItem player={player} key={`${player.id}T${player.teamId}`} />
    ));
  }

  renderPlayerListHeader() {
    return (
      <div className='player-list-header'>
        <div className='name'>Name</div>
        <div className='team'>Team</div>
        <div className='nationality'>Nationality</div>
        <div className='shirt-number'>Shirt No.</div>
      </div>
    );
  }

  render() {
    const { players, current, teams } = this.state;

    return (
      <Card className='player-list'>
        <div className='card-header'>
          <span className='text'>Player List: </span>
          <Filter descriptions={teams} current={current} onChange={this.filterChanged} />
        </div>
        <div className='card-content'>
          {this.renderPlayerListHeader()}
          {this.renderPlayerList(players)}
        </div>
        <div className='card-footer'>Count</div>
      </Card>
    );
  }
}

export default PlayerList;
