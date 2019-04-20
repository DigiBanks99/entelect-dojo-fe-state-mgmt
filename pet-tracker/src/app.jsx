import React, { Component } from 'react';
import { Header } from './components/shared/header';
import './app.scss';
import { AppRouter } from './components/shared/app-router';
import { Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <Typography className='layout' variant='body1'>
            <AppRouter />
          </Typography>
        </main>
      </div>
    );
  }
}

export default App;
