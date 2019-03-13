import React, { Component } from 'react';

import { Card, Image } from 'components/shared';
import { CompetitionService } from 'services';
import { CompetitionInfo, CompetitionTeams } from './children';

import './competition.scss';

class Competition extends Component {
  constructor(props) {
    super(props);

    this.state = { competition: {} };

    this.fetchData(+props.match.params.id);
  }

  fetchData(id) {
    CompetitionService.getCompetitionById(id).then(response => {
      this.setState({ competition: response });
    });
  }

  render() {
    const { competition } = this.state;
    if (!competition || !competition.area) return <div>No Data</div>;

    return (
      <Card className='competition'>
        <div className='card-header'>{competition.name}</div>
        <div className='card-content'>
          <div className='emblem'>
            <Image src={competition.emblemUrl} alt={competition.name} />
          </div>
          <CompetitionInfo competition={competition} />
          <CompetitionTeams competition={competition} />
        </div>
      </Card>
    );
  }
}

export default Competition;
