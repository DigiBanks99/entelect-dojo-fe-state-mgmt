import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Image extends Component {
  render() {
    const { src, alt, height, width, className } = this.props;
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    );
  }
}

Image.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
};

Image.defaultProps = {
  className: 'img',
  alt: 'None specified'
};

export default Image;
