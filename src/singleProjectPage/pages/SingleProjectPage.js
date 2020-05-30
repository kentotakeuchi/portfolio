import React from 'react';
import { useParams } from 'react-router-dom';

import './SingleProjectPage.scss';
import SingleProject from '../components/SingleProject/SingleProject';
import PROJECTSDATA from '../../data/projects.json';

const SingleProjectPage = () => {
  const projectId = useParams().projectId;
  const selectedProject = PROJECTSDATA.find(
    (project) => project.id === projectId
  );
  console.log({ selectedProject });

  return (
    <div className="single-project-page">
      <SingleProject selectedProject={selectedProject} />
    </div>
  );
};

export default SingleProjectPage;
