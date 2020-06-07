import React from 'react';
import { Link } from 'react-router-dom';

import './PostCard.scss';
import Image from '../../../shared/components/UIElements/Image/Image';

const PostCard = ({ slug, title, date, desc, mainImage }) => {
  return (
    <li className="post-card__item">
      <Link to={`/blog/${slug}`}>
        <article className="post-card__article">
          <header className="post-card__head">
            <h3 className="post-card__title" id={slug}>
              {title}
            </h3>
            <small className="post-card__date" id={`${slug}-date`}>
              {date}
            </small>
          </header>
          <div className="post-card__body">
            <figure className="post-card__main-image-box">
              <Image src={mainImage} alt={title} />
            </figure>
            <p className="post-card__desc" id={`post-card__desc-${slug}`}>
              {`${desc.slice(0, 1)}...`}
            </p>
          </div>
        </article>
      </Link>
    </li>
  );
};

export default PostCard;
