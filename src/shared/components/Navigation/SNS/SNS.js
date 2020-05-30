import React from 'react';

import './SNS.scss';
import Icon from '../../UIElements/Icon/Icon';

const SNS = ({ width, height, className }) => {
  return (
    <ul className={`sns ${className}`} style={{ width, height }}>
      <li>
        <a
          href="https://www.instagram.com/mikiotanaka/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-instagram" />
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com/mikio.tanaka.001"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-facebook" />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/KentoTakeuchi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-twitter" />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/takeuchi-kento-101b3549/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-linkedin2" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/kentotakeuchi?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon width={width} height={height} id="icon-github" />
        </a>
      </li>
    </ul>
  );
};

export default SNS;
