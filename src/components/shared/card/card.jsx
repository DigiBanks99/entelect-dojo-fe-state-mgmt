import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './card.scss';

class Card extends Component {
  render() {
    const { children, className } = this.props;
    let classes = 'card';
    if (className)
      classes += ` ${className}`;

    return (
      <div className={classes}>{children}</div>
    );
  }
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default Card;
