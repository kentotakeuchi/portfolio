import React, { useEffect, useContext } from 'react';

import './SingleProject.scss';
import ZoomableImage from '../../../shared/components/UIElements/ZoomableImage/ZoomableImage';
import Video from '../../../shared/components/UIElements/Video/Video';
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
    maintainance,
  } = selectedProject;

  const lng = useContext(LanguageContext);

  useEffect(() => {
    const ids = [
      'single-project__name',
      'single-project__date',
      'single-project__desc-0',
      'single-project__desc-1',
      'single-project__desc-2',
    ];

    if (client) ids.push('single-project__client');
    if (maintainance) ids.push('single-project__maintainance');

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng, client, maintainance]);

  return (
    <div className="single-project">
      <div className="single-project__head-box">
        {client && <span id="single-project__client">client work</span>}
        {maintainance && (
          <span id="single-project__maintainance">maintainance..</span>
        )}
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
        <Video src={mainImage} alt={name} autoPlay loop />
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
            <ZoomableImage src={img} alt={name} scale={1} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SingleProject;
