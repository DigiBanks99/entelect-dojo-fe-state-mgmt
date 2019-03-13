import React, { Component } from 'react';

import { PlayerService } from 'services';
import { Card } from 'components/shared';
import { PlayerInfo, PlayerStats } from './children';

import './player.scss';

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: {
        name: null
      }
    };

    this.fetchData(+props.match.params.id);
  }

  fetchData(id) {
    PlayerService.getPlayerById(id).then(({ data }) =>
      this.setState({ player: data })
    );
  }

  render() {
    const { player } = this.state;

    return (
      <Card className='player'>
        <div className='card-header'>{player.name}</div>
        <div className='card-content'>
          <PlayerInfo {...player} />
          <PlayerStats {...player} />
        </div>
      </Card>
    );
  }
}

export default Player;
