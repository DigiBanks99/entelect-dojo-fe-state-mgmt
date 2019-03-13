import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Image } from 'components/shared';

import './competition-list-item.scss';

class CompetitionListItem extends Component {
  render() {
    const { competition } = this.props;
    const link = `/competition/${competition.id}`;
    return (
      <li className='competition-list-item'>
        <Link className='competition-list-item-link' to={link}>
          <div className='name'>{competition.name}</div>
          <div className='crest'>
            <Image src={competition.emblemUrl} height={50} />
          </div>
          <div className='area'>{competition.area.name}</div>
          <div className='match-day'>{competition.currentSeason.currentMatchday}</div>
        </Link>
      </li>
    );
  }
}

CompetitionListItem.propTypes = {
  competition: PropTypes.object.isRequired
};

export default CompetitionListItem;