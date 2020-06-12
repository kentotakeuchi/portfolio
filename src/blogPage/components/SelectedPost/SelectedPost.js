import React, { useContext, useEffect } from 'react';

import './SelectedPost.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';

const SelectedPost = ({ post }) => {
  const { title, date, desc, mainImage } = post;

  const lng = useContext(LanguageContext);
  const { language } = lng;

  useEffect(() => {
    let ids = ['selected-post__title', 'selected-post__date'];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng]);

  const descElements = desc.map((paragraph, i) => <p key={i}>{paragraph}</p>);

  return (
    <article className="selected-post">
      <figure className="selected-post__main-image-box">
        <Image src={mainImage} alt={title} />
      </figure>
      <header className="selected-post__head">
        <h1 className="selected-post__title" id={`selected-post__title`}>
          {/* {language === 'en' ? title : title__jp} */}
          {language === 'en' ? title : null}
        </h1>
        <small className="selected-post__date" id="selected-post__date">
          {date}
        </small>
      </header>
      <div className="selected-post__body">
        <ul className="selected-post__description-list">{descElements}</ul>
      </div>
    </article>
  );
};

export default SelectedPost;
