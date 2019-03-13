import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Image from 'components/shared/image/image';

import './player-info.scss';

class PlayerInfo extends Component {
  render() {
    const {
      name,
      dateOfBirth,
      nationality,
      position,
      shirtNumber,
      crestUrl,
      teamName,
      teamId
    } = this.props;
    const displayDateOfBirth = new Date(dateOfBirth).toLocaleDateString();
    const link = `/team/${teamId}`;

    return (
      <div className='player-info'>
        <div className='player-image'>
          <FontAwesomeIcon icon='user' />
        </div>
        <ul className='player-details'>
          <li>
            <span className='description'>Name:</span>
            <span className='value'>{name}</span>
          </li>
          <li>
            <span className='description'>Date of Birth:</span>
            <span className='value'>{displayDateOfBirth}</span>
          </li>
          <li>
            <span className='description'>Nationality:</span>
            <span className='value'>{nationality}</span>
          </li>
          <li>
            <span className='description'>Position:</span>
            <span className='value'>{position}</span>
          </li>
          <li>
            <span className='description'>Shirt Number:</span>
            <span className='value'>{shirtNumber}</span>
          </li>
          <li>
            <span className='description'>Current Team:</span>
            <span className='value'>
              {crestUrl && <Image src={crestUrl} height={50} />}
              <Link className='name' to={link}>
                {teamName}
              </Link>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default PlayerInfo;
