import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './dojo-link.scss';

class DojoLink extends Component {
  render() {
    const {children} = this.props;

    return (
      <NavLink className='dojo-link' {...this.props}>
        <span className='content'>{ children }</span>
        <span className='bar'></span>
      </NavLink>
    )
  }
}

DojoLink.propTypes = {
  children: PropTypes.any.isRequired
};

export default DojoLink;
