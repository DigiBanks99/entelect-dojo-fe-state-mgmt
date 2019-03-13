import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Header } from './header';
import { Main } from './main';
import { Footer } from './footer';
import { DojoLink } from './shared';
import { HomeContainer } from './domain/home';
import { CompetitionListContainer, CompetitionContainer } from './domain/competition';
import { PlayerListContainer, PlayerContainer } from './domain/player';
import { TeamListContainer, TeamContainer } from './domain/team';

import './app.scss';

function App() {
  const footerInfo = {
    description: 'Entelect Dojos',
    trademark: 'Entelect ©',
    year: 2019
  };

  return (
    <div className='app'>
      <Header>
        <DojoLink to="/home">
          <FontAwesomeIcon icon='home' size='2x' />
        </DojoLink>
        <DojoLink to="/competition">Competitions</DojoLink>
        <DojoLink to="/team">Teams</DojoLink>
        <DojoLink to="/player">Players</DojoLink>
      </Header>
      <Main>
        <Switch>
          <Redirect exact from='/' to='/home' />
          <Route exact path='/home' component={HomeContainer} />
          <Route exact path='/competition' component={CompetitionListContainer} />
          <Route exact path='/competition/:id' component={CompetitionContainer} />
          <Route exact path='/team' component={TeamListContainer} />
          <Route exact path='/team/:id' component={TeamContainer} />
          <Route exact path='/player' component={PlayerListContainer} />
          <Route exact path='/player/:id' component={PlayerContainer} />
        </Switch>
      </Main>
      <Footer {...footerInfo} />
    </div>
  )
}

export default App;
