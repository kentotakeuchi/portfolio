import React from 'react';

import './HomePage.scss';
import ProjectList from '../components/ProjectList/ProjectList';

const HomePage = () => {
  return (
    <div className="home-page">
      <ProjectList />
    </div>
  );
};

export default HomePage;
