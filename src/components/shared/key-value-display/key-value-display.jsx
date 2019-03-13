import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './key-value-display.scss';

class KeyValue extends Component {
  render() {
    const { type, label, value, className } = this.props;
    const classes = `key-value-display${className ? ' ' + className : ''}`;

    return React.createElement(type, { className: classes }, [
      <div className='key' key={1}>
        {label}:
      </div>,
      <div className='value' key={2}>
        {value}
      </div>
    ]);
  }
}

KeyValue.propTypes = {
  type: PropTypes.elementType,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

KeyValue.defaultProps = {
  type: 'li'
};

export default KeyValue;
