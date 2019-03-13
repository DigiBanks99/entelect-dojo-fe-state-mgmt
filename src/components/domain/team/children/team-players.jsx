import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PlayerService } from 'services';

import './team-players.scss';

class TeamPlayers extends Component {
  constructor(props) {
    super(props);

    this.state = {players: []};

    this.fetchPlayers(props.team.id);
  }

  fetchPlayers(teamId) {
    PlayerService.getPlayerByTeamId(teamId)
      .then(({data}) => {
        this.setState({players: data});
      });
  }

  renderPlayers(players) {
    return players.map(player => (
        <li className='player'>
          <Link to={`/player/${player.id}`}>{player.name}</Link>
        </li>
      )
    );
  }

  render() {
    const { players } = this.state;

    return (
      <div className='team-players'>
        <div className='caption'>Players</div>
        <ul className='player-list'>{this.renderPlayers(players)}</ul>
      </div>
    );
  }
}

export default TeamPlayers;
