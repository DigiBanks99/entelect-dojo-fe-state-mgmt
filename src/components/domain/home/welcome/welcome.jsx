import React, { Component } from 'react';

import Card from 'components/shared/card/card';

import './welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <Card>
        <div className='card-header'>Welcome</div>
        <div className='card-content'>
          <p>
            Welcome to the{' '}
            <strong>Entelect Dojo for Front-End State Management</strong>. The
            purpose of this website it to get you comfortable with how a state
            store works using the{' '}
            <a
              href='https://redux.js.org/'
              id='redux-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              Redux
            </a>{' '}
            framework in conjuction with&nbsp;
            <a
              href='https://reactjs.org'
              id='react-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              ReactJS
            </a>
            . We have discussed other strategies, but these exercises will focus
            on the mentioned technologies. Please refer back to the&nbsp;
            <a
              href='https://confluence.entelect.co.za/display/ES/The+Entelect+Dojo'
              id='confluence-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              confluence
            </a>{' '}
            page to see what options are available for your framework of choice.
          </p>
          <p>
            The website is{' '}
            <a
              href='https://www.youtube.com/watch?v=8F9jXYOH2c0'
              id='soccer-link'
              target='_blank'
              rel='noopener noreferrer'
            >
              football (soccer)
            </a>{' '}
            information website where you can view{' '}
            <a
              href='/competition'
              id='competition-link'
              target='_self'
              rel='noopener noreferrer'
            >
              competitions
            </a>
            ,&nbsp;
            <a
              href='/team'
              id='team-link'
              target='_self'
              rel='noopener noreferrer'
            >
              teams
            </a>{' '}
            and{' '}
            <a
              href='/player'
              id='player-link'
              target='_self'
              rel='noopener noreferrer'
            >
              players
            </a>{' '}
            and the stats that relate to those domains. We will attempt to keep
            the selected state as we drill down into each of the domains. In
            football teams can belong to multiple competitions and teams have
            stats tracked over competitions. In turn, players can have played
            for multiple teams and have stats tracked for each team and each
            competition they play in.
          </p>
          <span>
            <strong>Exercises</strong>
            <ol>
              <li>Keep competition state throughtout all screens</li>
              <li>Keep team state throughtout all screens</li>
              <li>Keep player state throughtout all screens</li>
              <li>Change the XXX component to show the current state</li>
            </ol>
          </span>
        </div>
      </Card>
    );
  }
}

export default Welcome;
