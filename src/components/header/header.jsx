import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContextSelector } from 'components/shared';

import './header.scss';

class Header extends Component {
  render() {
    const { children } = this.props;

    return (
      <header className='header'>
        <nav className='brand'>
          <Link to='/home'>
            <FontAwesomeIcon icon='futbol' />
            Futbol
          </Link>
        </nav>
        <nav className='nav'>{children}</nav>
        <div className='context'>
          <ContextSelector />
        </div>
      </header>
    );
  }
}

export default Header;
