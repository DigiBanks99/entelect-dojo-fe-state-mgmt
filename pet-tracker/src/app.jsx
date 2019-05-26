import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/shared/header';
import './app.scss';
import { AppRouter } from './components/shared/app-router';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <Header />
          <main>
            <AppRouter />
          </main>
        </Router>
      </div>
    );
  }
}

export default App;
