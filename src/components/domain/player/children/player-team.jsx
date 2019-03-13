import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Image from 'components/shared/image/image';

import './player-team.scss';

class PlayerTeam extends Component {
  render() {
    const { teamName, dateJoined, crestUrl } = this.props;

    return (
      <div className='player-team'>
        <div className='caption'>Team Information</div>
        <ul>
          <li>
            <span className='description'>Current Team:</span>
            <span className='value'>
              <Image src={crestUrl} height={50} />
              <span className='name'>{teamName}</span>
            </span>
          </li>
          <li>
            <span className='description'>Date Joined:</span>
            <span className='value'>{dateJoined}</span>
          </li>
        </ul>
      </div>
    );
  }
}

PlayerTeam.propTypes = {
  player: PropTypes.object.isRequired
};

export default PlayerTeam;
