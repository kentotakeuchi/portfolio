import React from 'react';

import './Image.scss';

const Image = ({ alt, src, contain, left, className }) => (
  <img
    className={`image ${className}`}
    alt={alt}
    src={src}
    style={{
      objectFit: contain ? 'contain' : 'cover',
      backgroundPosition: left ? 'left' : 'center',
    }}
  />
);

export default Image;
