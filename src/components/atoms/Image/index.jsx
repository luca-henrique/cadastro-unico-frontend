import React from 'react';
import PropTypes from 'prop-types';

const Image = ({src, alt}) => {
  return <img src={src} width='100%' height='100%' alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
