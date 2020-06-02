import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import './ProjectList.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';
import PROJECTSDATA from '../../../data/projects.json';

// TODO: temp
const images = [
  'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1487700160041-babef9c3cb55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1494200483035-db7bc6aa5739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

const ProjectList = () => {
  const lng = useContext(LanguageContext);

  const mq = window.matchMedia('(max-width: 37.5em)');

  useEffect(() => {
    // Desktop only
    if (!mq.matches) {
      const body = document.querySelector('body');
      const yuzu = document.getElementById('yuzu-ramen');
      const random = document.getElementById('random-generator-for-soccer');
      const kaga = document.getElementById('kaga-electronics-usa');
      const bank = document.getElementById('bank');
      const saturdays = document.getElementById('saturdays-art-surf');
      const todo = document.getElementById('todo');
      const clear = document.getElementById('clear');

      const elements = [yuzu, random, kaga, bank, saturdays, todo, clear];

      elements.forEach((el, i) => {
        el.addEventListener('mouseover', () => {
          body.style.backgroundImage = `url(${images[i]})`;
          body.style.width = '100vw';
          body.style.height = '100vh';
        });
        el.addEventListener('mouseout', () => {
          body.style.backgroundImage = ``;
          body.style.width = '';
          body.style.height = '';
        });
      });

      return () => {
        body.style.backgroundImage = ``;
        body.style.width = '';
        body.style.height = '';
      };
    }
  }, [mq]);

  useEffect(() => {
    let ids = [
      'yuzu-ramen-date',
      'random-generator-for-soccer-date',
      'kaga-electronics-usa-date',
      'bank-date',
      'saturdays-art-surf-date',
      'todo-date',
      'clear-date',
      'yuzu-ramen',
      'random-generator-for-soccer',
      'kaga-electronics-usa',
      'bank',
      'saturdays-art-surf',
      'todo',
      'clear',
      'client',
      'maintainance',
    ];

    // Mobile
    if (mq.matches) {
      ids = ids.concat([
        'project-list__desc-0',
        'project-list__desc-1',
        'project-list__desc-2',
        'project-list__desc-3',
        'project-list__desc-4',
        'project-list__desc-5',
        'project-list__desc-6',
      ]);
    }

    console.log({ ids });

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng, mq]);

  let projectElements;
  // Desktop
  if (!mq.matches) {
    projectElements = PROJECTSDATA.map((project, i) => (
      <li key={project.id} className="project-list__item">
        <small className="project-list__date" id={`${project.id}-date`}>
          {project.date}
        </small>
        <Link to={`/projects/${project.id}`} id={project.id}>
          {project.name}
        </Link>
        {project.client && <span id={`client`}>client work</span>}
        {project.maintainance && (
          <span id={`maintainance`}>maintainance..</span>
        )}
      </li>
    ));
    // Mobile
  } else {
    projectElements = PROJECTSDATA.map((project, i) => (
      <li key={project.id} className="project-list__item">
        <Link to={`/projects/${project.id}`}>
          <Image src={images[i]} alt={project.name} />
          <div className="project-list__text-box">
            <h3 className="project-list__name" id={project.id}>
              {project.name}
            </h3>
            <small className="project-list__date" id={`${project.id}-date`}>
              {project.date}
            </small>
            {project.client && <span id={`client`}>client work</span>}
            {project.maintainance && (
              <span id={`maintainance`}>maintainance..</span>
            )}
            <p
              className="project-list__desc"
              id={`project-list__desc-${i}`}
            >{`${project.desc.slice(0, 1)}...`}</p>
          </div>
        </Link>
      </li>
    ));
  }

  return <ul className="project-list">{projectElements}</ul>;
};

export default ProjectList;
