import React, { Component } from 'react';

import { StatsService } from 'services';
import { KeyValue } from 'components/shared';

import './player-stats.scss';

class PlayerStats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {
        goals: 0,
        assists: 0,
        starts: 0,
        subApps: 0,
        yellow: 0,
        red: 0
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id) this.fetchData(nextProps.id);
  }

  fetchData(playerId) {
    StatsService.getPlayerStats(playerId).then(response => {
      this.setState({ stats: response.data });
    });
  }

  render() {
    const { stats } = this.state;
    const appearances = `${stats.starts} (${stats.subApps})`;

    return (
      <div className='player-stats'>
        <div className='caption'>Statistics</div>
        <div className='stats'>
          <KeyValue label='Appearances' value={appearances} key={1} />
          <KeyValue label='Goals' value={`${stats.goals}`} key={2} />
          <KeyValue label='Assists' value={`${stats.assists}`} key={3} />
          <KeyValue label='Yellow' value={`${stats.yellow}`} key={4} />
          <KeyValue label='Red' value={`${stats.red}`} key={5} />
        </div>
      </div>
    );
  }
}

export default PlayerStats;
