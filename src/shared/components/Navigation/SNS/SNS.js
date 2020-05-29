import React from 'react';

import './SNS.scss';
import Icon from '../../UIElements/Icon/Icon';

const SNS = ({ width, height, className }) => {
  return (
    <ul className={`sns ${className}`} style={{ width, height }}>
      <li>
        <a
          href="https://instagram.com/yuzuramenca/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/yuzuramen/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/yuzuramenca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-twitter" />
        </a>
      </li>
    </ul>
  );
};

export default SNS;
