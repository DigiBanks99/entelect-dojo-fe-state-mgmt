import React, { Component } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Svgs } from './../../../resources';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          <div>
            // Move this out to a component on its own. Maybe pass in a string
            and then get the image. Not sure. In a way that it makes sense for
            redux
            <Svgs.Animals.Cat height={50} />
          </div>
          <Typography variant='h6' color='inherit'>
            News
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Header;
