import React, { Component } from 'react';

import { CompetitionService } from 'services';
import { Card } from 'components/shared';
import { CompetitionListItem } from './children';

import './competition-list.scss';

class CompetitionList extends Component {
  constructor(props) {
    super(props);

    this.state = { competitions: [] };

    this.fetchData();
  }

  fetchData() {
    CompetitionService.getAllCompetitions().then(({ data }) =>
      this.setState({ competitions: data })
    );
  }

  renderCompetitions(competitions = []) {
    if (!competitions) return;

    return competitions.map(competition => (
      <CompetitionListItem competition={competition} key={competition.id} />
    ));
  }

  renderCompetitionHeader() {
    return (
      <li className='competition-list-header'>
        <div className='name'>Name</div>
        <div className='crest'>Emblem</div>
        <div className='country'>Country</div>
        <div className='match-day'>Match Day</div>
      </li>
    );
  }

  render() {
    const { competitions } = this.state;

    return (
      <Card className='competition-list'>
        <div className='card-header'>Competition List</div>
        <div className='card-content'>
          <ul>
            {this.renderCompetitionHeader()}
            {this.renderCompetitions(competitions)}
          </ul>
        </div>
        <div className='card-footer'>Count</div>
      </Card>
    );
  }
}

export default CompetitionList;
