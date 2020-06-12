import React, { useEffect, useState, useCallback } from 'react';
import firebase from 'firebase/app';

import './Posts.scss';
import '../../../Firestore';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import Paginator from '../../../shared/components/UIElements/Paginator/Paginator';
import PostCardList from '../PostCardList/PostCardList';
import { useHttpClient } from '../../../shared/hooks/http-hook';

let loadPosts;
let totalPosts;
let db = firebase.firestore();

const Posts = () => {
  const { isLoading, error, clearError } = useHttpClient();

  const [posts, setPosts] = useState([]);
  const [totalPostsLocal, setTotalPostsLocal] = useState(0);
  const [postPage, setPostPage] = useState(1);
  const [first, setFirst] = useState({});
  const [last, setLast] = useState({});
  const postsPerPage = 2;

  useEffect(() => {
    db.collection('posts')
      .get()
      .then((snap) => {
        totalPosts = snap.size;
        setTotalPostsLocal(totalPosts);
      });
  }, []);

  useEffect(() => {
    loadPosts();
  }, [totalPostsLocal]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [postPage]);

  loadPosts = useCallback(
    async (direction) => {
      let page = postPage;
      if (direction) {
        if (direction === 'next') {
          page++;
          setPostPage(page);
        } else if (direction === 'previous') {
          page--;
          setPostPage(page);
        } else {
          page = direction;
          setPostPage(page);
        }
      }

      let query;
      let snapshot;

      if (direction === 'previous') {
        query = db
          .collection('posts')
          .orderBy('date', 'desc')
          .endBefore(first.data().date)
          .limitToLast(postsPerPage);

        snapshot = await query.get();

        setFirst(snapshot.docs[0]);
        setLast(snapshot.docs[snapshot.docs.length - 1]);
      } else if (direction === 'next') {
        query = db
          .collection('posts')
          .orderBy('date', 'desc')
          .startAfter(last.data().date)
          .limit(postsPerPage);

        snapshot = await query.get();

        setFirst(snapshot.docs[0]);
        setLast(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        query = db
          .collection('posts')
          .orderBy('date', 'desc')
          .limit(postsPerPage);

        snapshot = await query.get();

        setFirst(snapshot.docs[0]);
        setLast(snapshot.docs[snapshot.docs.length - 1]);
      }

      const fetchedPosts = [];
      snapshot.docs.forEach((doc) => {
        fetchedPosts.push(doc.data());
      });

      setPosts(fetchedPosts);
      setTotalPostsLocal(totalPosts);
    },
    [postPage, first, last]
  );

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && <LoadingSpinner asOverlay />}
      <section className="posts">
        <Paginator
          onPage={loadPosts}
          lastPage={Math.ceil(totalPostsLocal / postsPerPage)}
          currentPage={postPage}
          className="paginator--posts"
        >
          <PostCardList posts={posts} setPostPage={setPostPage} />
        </Paginator>
      </section>
    </React.Fragment>
  );
};

export default Posts;
