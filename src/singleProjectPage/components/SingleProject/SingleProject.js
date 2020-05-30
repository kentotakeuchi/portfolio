import React, { useEffect, useContext } from 'react';

import './SingleProject.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
import ContactIcon from '../../../shared/components/UIElements/ContactIcon/ContactIcon';
import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';

const SingleProject = ({ selectedProject }) => {
  const {
    // id,
    name,
    date,
    url,
    desc,
    mainImage,
    subImages,
    client,
  } = selectedProject;

  const lng = useContext(LanguageContext);

  useEffect(() => {
    const ids = [
      'single-project__client',
      'single-project__name',
      'single-project__date',
      'single-project__desc-0',
      'single-project__desc-1',
      'single-project__desc-2',
    ];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng]);

  return (
    <div className="single-project">
      <div className="single-project__head-box">
        {client && <span id="single-project__client">client work</span>}
        <h3 className="single-project__name" id="single-project__name">
          {name}
        </h3>
        <small className="single-project__date" id="single-project__date">
          {date}
        </small>
      </div>
      <ul className="single-project__link-box">
        <ContactIcon url={url} width={15} height={15} id="icon-link" />
      </ul>
      <figure className="single-project__main-img-box">
        <Image src={mainImage} alt={name} />
      </figure>
      <p className="single-project__desc" id="single-project__desc">
        {desc.map((paragraph, i) => (
          <span key={paragraph} id={`single-project__desc-${i}`}>
            {paragraph}
          </span>
        ))}
      </p>
      <ul className="single-project__sub-img-box">
        {subImages.map((img) => (
          <li key={img}>
            <Image src={img} alt={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleProject;
