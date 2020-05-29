import React from 'react';

import './Icon.scss';
import sprite from '../../../../asset/images/sprite.svg';

const Icon = ({ width, height, id }) => {
  return (
    <svg className="icon" width={width} height={height}>
      <use xlinkHref={sprite + `#${id}`}></use>
    </svg>
  );
};

export default Icon;
