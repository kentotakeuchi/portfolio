import React from 'react';

import './Image.scss';

const Image = ({ alt, filename, contain, left, className, directory }) => (
  <img
    className={`image ${className}`}
    alt={alt}
    src={`${process.env.REACT_APP_ASSET_URL}/img/${directory}/${filename}`}
    style={{
      objectFit: contain ? 'contain' : 'cover',
      backgroundPosition: left ? 'left' : 'center',
    }}
  />
);

export default Image;
