import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header, AppRouter } from 'components/shared';
import './app.scss';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(12)
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className='App'>
      <Router>
        <Header />
        <main>
          <Container maxWidth='md' className={classes.container}>
            <Paper>
              <AppRouter />
            </Paper>
          </Container>
        </main>
      </Router>
    </div>
  );
}

export default App;
