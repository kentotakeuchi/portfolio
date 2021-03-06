import React, { useContext } from 'react';

import './PostCardList.scss';
import PostCard from '../PostCard/PostCard';
import { LanguageContext } from '../../../shared/context/language-context';

const PostCardList = ({ posts }) => {
  console.log({ posts });

  const lng = useContext(LanguageContext);
  const { language } = lng;

  let postCardElements;
  if (posts.length === 0) {
    postCardElements = (
      <p className="post-card-list__no-found">
        {language === 'en' ? 'no post found' : 'ブログが見つかりませんでした'}
      </p>
    );
  } else {
    postCardElements = posts.map((post, i) => (
      <PostCard
        key={i}
        i={i}
        slug={post.slug}
        title={language === 'en' ? post.title : post.title__jp}
        date={post.date}
        desc={language === 'en' ? post.desc : post.desc__jp}
        mainImage={post.mainImage}
      />
    ));
  }

  return <ul className="post-card-list">{postCardElements}</ul>;
};

export default PostCardList;
