import React, { useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import './NavLinks.scss';
import { shuffleText, removeEvent } from '../../../util/suffleText';
import { LanguageContext } from '../../../context/language-context';

const NavLinks = ({ className }) => {
  const lng = useContext(LanguageContext);
  console.log({ lng });

  // TODO: click > destroyed link name..
  useEffect(() => {
    const ids = ['all-projects', 'profile', 'contact', 'blog'];

    ids.forEach((id) => {
      shuffleText(id);
    });

    return () => {
      ids.forEach((id) => {
        removeEvent(id);
      });
    };
  }, []);

  return (
    <ul className={`nav-links ${className}`}>
      <li>
        <NavLink to="/" id="all-projects">
          {lng.language === 'en' ? 'all projects' : '全プロジェクト'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/profile" id="profile">
          {lng.language === 'en' ? 'profile' : 'プロフィール'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" id="contact">
          {lng.language === 'en' ? 'contact' : 'お問い合わせ'}
        </NavLink>
      </li>
      <li>
        <NavLink to="/blog" id="blog">
          {lng.language === 'en' ? 'blog' : 'ブログ'}
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
