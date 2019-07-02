import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AnimalIcon, GoBack } from 'components/shared';
import { Animals as AnimalConsts } from 'app.constants';
import './header.scss';

class Header extends Component {
  renderNonHome() {
    const petName = this.props.match.params.petName || 'Chewy';
    return (
      <Fragment>
        <GoBack />
        <AnimalIcon animal={AnimalConsts.CAT} />
        <Typography variant='h6' color='inherit'>
          {petName}
        </Typography>
      </Fragment>
    );
  }

  renderHome() {
    return (
      <Typography variant='h6' color='inherit'>
        Pet Tracker
      </Typography>
    );
  }

  render() {
    const isHome = this.props.history.location.pathname === '/';
    return (
      <AppBar>
        <Toolbar>{isHome ? this.renderHome() : this.renderNonHome()}</Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
