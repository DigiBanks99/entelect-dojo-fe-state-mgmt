import React from 'react';
import { withRouter } from 'react-router-dom';
import KeyboardBackspace from '@material-ui/icons/KeyboardBackspace';

const GoBack = ({ history }) => {
  const handleGoBack = () => history.goBack();
  return (
    <div>
      <KeyboardBackspace onClick={handleGoBack} />
    </div>
  );
};

export default withRouter(GoBack);
