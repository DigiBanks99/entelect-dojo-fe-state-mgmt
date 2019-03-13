import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { current } = this.props;
    this.setState({ current: current });
  }

  handleChange(event) {
    this.setState({ value: event.value });

    this.props.onChange(event.value);
  }

  getOptions(descriptions = []) {
    if (descriptions === []) return [];

    const options = descriptions
      .sort((left, right) => {
        if (left < right) return -1;
        if (left === right) return 0;
        return 1;
      })
      .map(description => ({ value: description, label: description }));

    return options;
  }

  render() {
    const { descriptions, name } = this.props;
    const { current } = this.state;
    const options = this.getOptions(descriptions);

    return (
      <Select
        className='filter'
        name={name}
        defaultValue={{ label: current, value: current }}
        onChange={this.handleChange}
        options={options}
      />
    );
  }
}

Filter.propTypes = {
  descriptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string
};

export default Filter;
