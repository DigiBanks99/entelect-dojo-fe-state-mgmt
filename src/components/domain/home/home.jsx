import React, { Component } from 'react';

import Welcome from './welcome/welcome';
import { CompetitionListContainer } from '../competition';
import { TeamListContainer } from '../team';

import './home.scss';

class Home extends Component {
  render() {
    return (
      <div className='home'>
        <div className='welcome'>
          <Welcome />
        </div>
        <div className='left'>
          <CompetitionListContainer />
        </div>
        <div className='right'>
          <TeamListContainer />
        </div>
      </div>
    );
  }
}

export default Home;
