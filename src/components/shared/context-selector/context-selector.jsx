import React, { Component } from 'react';

import { CompetitionService } from 'services';
import { CompetitionSelector, MatchWeekSelector } from 'components/shared';

import './context-selector.scss';

class ContextSelector extends Component {
  constructor(props) {
    super(props);

    this.state = {
      competitions: [],
      selectedCompetition: undefined,
      matchWeek: 1
    };

    this.fetchData();

    this.handleMatchWeekChange = this.handleMatchWeekChange.bind(this);
    this.handleCompetitionChange = this.handleCompetitionChange.bind(this);
  }

  fetchData() {
    CompetitionService.getAllCompetitions().then(({ data }) => {
      this.setState({
        competitions: data,
        selectedCompetition: data && data.length ? data[0] : undefined
      });
    });
  }

  handleMatchWeekChange(matchWeek) {
    this.setState({ matchWeek });
  }

  handleCompetitionChange(selectedCompetition) {
    this.setState({ selectedCompetition });
    if (
      selectedCompetition.currentSeason.currentMatchday < this.state.matchWeek
    ) {
      this.setState({ matchWeek: 1 });
    }
  }

  render() {
    const { competitions, selectedCompetition, matchWeek } = this.state;
    const matchWeekEnd =
      selectedCompetition && selectedCompetition.currentSeason
        ? selectedCompetition.currentSeason.currentMatchday
        : 1;

    return (
      <div className='context-selector'>
        <div className='competition'>
          <CompetitionSelector
            value={selectedCompetition}
            competitions={competitions}
            onChange={this.handleCompetitionChange}
          />
        </div>
        <div className='match-week'>
          <span className='caption'>MW:</span>
          <MatchWeekSelector
            value={matchWeek}
            matchWeekEnd={matchWeekEnd}
            onChange={this.handleMatchWeekChange}
          />
        </div>
      </div>
    );
  }
}

export default ContextSelector;
