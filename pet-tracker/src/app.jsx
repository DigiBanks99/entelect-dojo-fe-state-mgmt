import React, { Component } from 'react';
import { Header } from './components/shared/header';
import './app.scss';
import { AppRouter } from './components/shared/app-router';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
    );
  }
}

export default App;
