import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './footer.scss';

class Footer extends Component {
  render() {
    const { description, trademark, year } = this.props;
    return (
      <footer className='footer'>
        <div className='description'>{description}</div>
        <div className='trademark'>{trademark}</div>
        <div className='year'>{year}</div>
      </footer>
    )
  }
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  trademark: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired
};

export default Footer;
