import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './PostCard.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
// import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';

const PostCard = ({ i, slug, title, date, desc, mainImage }) => {
  const lng = useContext(LanguageContext);
  const { language } = lng;

  // useEffect(() => {
  //   let ids = [
  //     'post-card__title--0',
  //     'post-card__title--1',
  //     'post-card__desc--0',
  //     'post-card__desc--1',
  //   ];

  //   ids.forEach((id) => {
  //     shuffleText(id);
  //   });
  // }, [lng]);

  return (
    <li className="post-card__item">
      <Link to={`/blog/${slug}`}>
        <article className="post-card__article">
          <header className="post-card__head">
            <h3 className="post-card__title" id={`post-card__title--${i}`}>
              {language === 'en' ? title : null}
            </h3>
            <small className="post-card__date" id={`${slug}-date`}>
              {date}
            </small>
          </header>
          <div className="post-card__body">
            <figure className="post-card__main-image-box">
              <Image src={mainImage} alt={title} />
            </figure>
            <p className="post-card__desc" id={`post-card__desc--${i}`}>
              {language === 'en' ? `${desc[0].slice(0, 200)}...` : null}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
