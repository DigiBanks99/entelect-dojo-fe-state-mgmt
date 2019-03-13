import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faFutbol, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

import App from './components/app';

import './style.scss';

faLibrary.add(faFutbol);
faLibrary.add(faHome);
faLibrary.add(faUser);

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
