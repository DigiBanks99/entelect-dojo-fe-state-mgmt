import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './loader.scss';

class Loader extends Component {
  renderLoading() {
    const { progress } = this.props;
    const progressStyle = {
      width: (progress.position / progress.end) * 100 + '%'
    };
    return (
      <div className='loader'>
        <span className='description'>Loading...</span>
        <span className='progress'>
          <span style={progressStyle} />
        </span>
      </div>
    );
  }

  render() {
    const { loading } = this.props;

    return loading && this.renderLoading();
  }
}

Loader.propTypes = {
  loading: PropTypes.bool,
  progress: PropTypes.shape({
    end: PropTypes.number,
    position: PropTypes.number
  })
};

export default Loader;
