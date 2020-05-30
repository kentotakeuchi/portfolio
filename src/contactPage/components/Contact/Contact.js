import React from 'react';

import './Contact.scss';
import ContactIcon from '../../../shared/components/UIElements/ContactIcon/ContactIcon';
import SNS from '../../../shared/components/Navigation/SNS/SNS';

const Contact = () => {
  return (
    <div className="contact">
      <ul className="contact__contact-icon-box">
        <ContactIcon
          url="https://www.google.com/maps/place/Santa+Clara,+CA/@37.3710062,-122.0375929,12z/data=!3m1!4b1!4m5!3m4!1s0x808fb7815c08c193:0xe475a47ca3c0bfc0!8m2!3d37.3541079!4d-121.9552356"
          width={11}
          height={14}
          id="icon-location"
        />
        <ContactIcon
          url="mailto:kento.takeuchi.official@gmail.com"
          width={14}
          height={10}
          id="icon-email"
        />
        <ContactIcon
          url="tel:951-441-1777"
          width={14}
          height={14}
          id="icon-phone"
        />
      </ul>
      <SNS className="sns--contact" width={20} height={20} />
    </div>
  );
};

export default Contact;
