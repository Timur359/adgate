import React, { useEffect, useState } from 'react';
import axios from 'axios';

import HeadPage from 'components/HeadPage/HeadPage';

import './HomePage.css';

//Страница с новостями

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastMovieIndex = currentPage * postsPerPage;

  const currentMovies = posts.slice(0, lastMovieIndex);

  //Пагинация

  const nextPage = () => setCurrentPage((prev) => prev + 1);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="home-page">
      <HeadPage />
      <h1>Новости</h1>
      <ul className="home-page__posts">
        {currentMovies.map((post) => {
          return (
            <div className="home-page__post" key={post.id}>
              <h2 className="home-page__post_title">{post.title}</h2>
              <p className="home-page__post_text">{post.body}</p>
            </div>
          );
        })}
      </ul>
      <button onClick={nextPage} className="home-page__button">
        Ещё...
      </button>
    </div>
  );
};

export default HomePage;
