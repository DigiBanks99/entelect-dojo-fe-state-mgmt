import React, { Component } from 'react';

import { KeyValue } from 'components/shared';

import './competition-info.scss';

class CompetitionInfo extends Component {
  render() {
    const { competition } = this.props;

    return (
      <div className='info'>
        <div className='caption'>Info</div>
        <ul className='info-list'>
          <KeyValue label='Name' value={competition.name} />
          <KeyValue label='Code' value={competition.code} />
          <KeyValue label='Area' value={(competition.area || {}).name} />
          <KeyValue label='Current Season' value={`${competition.currentSeason.startDate} to ${competition.currentSeason.endDate}`} />
          <KeyValue label='Current Matchday' value={competition.currentSeason.currentMatchday} />
        </ul>
      </div>
    );
  }
}

export default CompetitionInfo;
