import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Image from 'components/shared/image/image';

import './team-list-item.scss';

class TeamListItem extends Component {
  render() {
    const { team } = this.props;
    let link = `/team/${team.id}`;

    return (
      <Link to={link}>
      <li className='team-list-item'>
        <div className='team-name'>{team.name}</div>
        <div className='team-crest'>
          <Image src={team.crestUrl} height={50} />
        </div>
        <div className='team-founded'>{team.founded}</div>
        <div className='team-country'>{team.area.name}</div>
      </li>
      </Link>
    );
  }
}

TeamListItem.propTypes = {
  team: PropTypes.object.isRequired
};

export default TeamListItem;
