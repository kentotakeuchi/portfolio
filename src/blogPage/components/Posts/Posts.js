import React, { useEffect, useState, useCallback } from 'react';

import './Posts.scss';
import ErrorModal from '../../../shared/components/UIElements/ErrorModal/ErrorModal';
import LoadingSpinner from '../../../shared/components/UIElements/LoadingSpinner/LoadingSpinner';
import Paginator from '../../../shared/components/UIElements/Paginator/Paginator';
import PostCardList from '../PostCardList/PostCardList';
import { useHttpClient } from '../../../shared/hooks/http-hook';

let loadPosts;

const Posts = () => {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const [posts, setPosts] = useState([]);
  const [totalPostsLocal, setTotalPostsLocal] = useState(0);
  const [postPage, setPostPage] = useState(1);
  const postsPerPage = 3;

  useEffect(() => {
    loadPosts();
  }, [totalPostsLocal]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [postPage]);

  loadPosts = useCallback(
    async (direction) => {
      console.log({ direction });

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

      try {
        // let url = `${process.env.REACT_APP_BACKEND_URL}/posts?page=${page}&limit=3`;
        let url = `${process.env.REACT_APP_BACKEND_URL}/posts.json`;

        const responseData = await sendRequest(url, 'GET', null, {});
        console.log({ responseData });

        const fetchedPosts = [];
        for (let key in responseData) {
          fetchedPosts.push(responseData[key]);
        }
        setPosts(fetchedPosts);
        setTotalPostsLocal(responseData.total);
      } catch (err) {}
    },
    [postPage, sendRequest]
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
