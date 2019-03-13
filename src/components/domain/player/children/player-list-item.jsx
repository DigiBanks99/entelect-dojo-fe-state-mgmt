import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Image from 'components/shared/image/image';

import './player-list-item.scss';

class PlayerListItem extends Component {
  render() {
    const { player } = this.props;
    const link = `/player/${player.id}`;

    return (
      <Link to={link}>
        <div className='player-list-item' key={`${player.id}T${player.teamId}`}>
          <div className='name'>{player.name}</div>
          <div className='team'>
            {
              player.crestUrl &&
              <Image className='team-image' src={player.crestUrl} alt={player.teamName} height={50} />
            }
            <div className='team-name'>{player.teamName}</div>
          </div>
          <div className='nationality'>{player.nationality}</div>
          <div className='shirt-number'>{player.shirtNumber}</div>
        </div>
      </Link>
    )
  }
}

export default PlayerListItem;