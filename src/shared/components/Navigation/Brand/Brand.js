import React, { useEffect, useContext } from 'react';

import './Brand.scss';
import { shuffleText } from '../../../util/suffleText';
import { LanguageContext } from '../../../../shared/context/language-context';

const Brand = () => {
  const lng = useContext(LanguageContext);

  useEffect(() => {
    const ids = ['brand-name', 'brand-sub'];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, []);

  return (
    <div className="brand">
      <h3 className="brand__name" id="brand-name">
        kento takeuchi
      </h3>
      <h3 className="brand__sub" id="brand-sub">
        web developer | soccer player (amature) | santa clara
      </h3>
    </div>
  );
};

export default Brand;
