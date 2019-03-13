import React, { Component } from 'react';
import Select from 'react-select';

class MatchWeekSelector extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(option) {
    const { onChange } = this.props;

    onChange(option.value);
  }

  getMatchWeeks(matchWeekEnd) {
    const matchWeeks = [];

    for (let i = 0; i < matchWeekEnd; i++) {
      matchWeeks.push({ label: i + 1, value: i + 1 });
    }

    return matchWeeks;
  }

  render() {
    const { matchWeekEnd, value } = this.props;
    const matchWeekOptions = this.getMatchWeeks(matchWeekEnd);

    const currentMatchWeek = matchWeekOptions.find(
      option => option.value === value
    );

    return (
      <Select
        className='match-week-selector'
        name='match-week-selector'
        value={currentMatchWeek}
        onChange={this.handleChange}
        options={matchWeekOptions}
      />
    );
  }
}

export default MatchWeekSelector;
