import React, { Component } from 'react';
import Select from 'react-select';

import { Image } from 'components/shared';

import './competition-selector.scss';

class CompetitionSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChangeInternal = this.handleChangeInternal.bind(this);
  }

  handleChangeInternal(option) {
    const { onChange } = this.props;

    onChange(option.value);
  }

  transformCompetitionForSelect(competition) {
    if (competition == null) return { label: '', value: 'Loading...' };
    return {
      label: (
        <div className='competition-select-option'>
          <Image
            src={competition.emblemUrl}
            alt={competition.code}
            className='emblem'
          />
          <span className='code'>{competition.code}</span>
        </div>
      ),
      value: competition
    };
  }

  render() {
    const { value, competitions } = this.props;
    const competitionOptions = competitions.map(competition =>
      this.transformCompetitionForSelect(competition)
    );

    const selectedCompetition = competitionOptions.find(
      option => value && option.value.id === value.id
    );

    return (
      <Select
        value={selectedCompetition}
        name='competition-selector'
        className='competition-selector'
        onChange={this.handleChangeInternal}
        options={competitionOptions}
      />
    );
  }
}

export default CompetitionSelector;
