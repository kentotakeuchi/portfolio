import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/app';

import './SingleBlogPage.scss';
import '../../Firestore';
import SelectedPost from '../components/SelectedPost/SelectedPost';

let db = firebase.firestore();

const SingleBlogPage = () => {
  const slug = useParams().slug;

  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const snapshot = await db
          .collection('posts')
          .where('slug', '==', slug)
          .get();
        console.log({ snapshot });

        if (snapshot.empty) {
          console.log('No matching documents.');
          return;
        }

        snapshot.forEach((doc) => {
          console.log(doc.id, '=>', doc.data());
          setPost(doc.data());
        });
      } catch (err) {
        console.log('Error getting documents', err);
      }
    };

    fetchPost();
  }, [slug]);

  return (
    <div className="single-blog-page">
      {post ? <SelectedPost post={post} /> : <p>no post found..</p>}
    </div>
  );
};

export default SingleBlogPage;
