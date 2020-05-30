import React from 'react';

import './ContactIcon.scss';
import Icon from '../Icon/Icon';

const ContactIcon = ({ url, width, height, id }) => {
  return (
    <li className="contact-icon">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-icon__link"
      >
        <Icon width={width} height={height} id={id} />
      </a>
    </li>
  );
};

export default ContactIcon;
