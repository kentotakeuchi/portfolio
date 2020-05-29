import React, { useContext, useEffect } from 'react';
import './Language.scss';
import { shuffleText } from '../../../util/suffleText';
import { LanguageContext } from '../../../context/language-context';

const Language = (props) => {
  const lng = useContext(LanguageContext);

  useEffect(() => {
    const ids = ['en', 'jp'];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, []);

  return (
    <ul className={`language ${props.className}`}>
      <li
        className={lng.language === 'en' ? 'active' : undefined}
        onClick={() => lng.change('en')}
        id="en"
      >
        EN
      </li>
      <span>|</span>
      <li
        className={lng.language === 'jp' ? 'active' : undefined}
        onClick={() => lng.change('jp')}
        id="jp"
      >
        JP
      </li>
    </ul>
  );
};

export default Language;
