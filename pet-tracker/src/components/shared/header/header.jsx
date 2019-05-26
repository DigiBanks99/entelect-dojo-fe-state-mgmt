import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AnimalIcon } from 'components/shared/animal-icon';
import { Animals as AnimalConsts } from 'app.constants';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <NavLink to='/'>Home</NavLink>
          <AnimalIcon animal={AnimalConsts.CAT} />
          <Typography variant='h6' color='inherit'>
            Name
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
