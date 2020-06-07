import React, { useEffect, useContext } from 'react';

import './Brand.scss';
import { shuffleText } from '../../../util/suffleText';
import { LanguageContext } from '../../../../shared/context/language-context';

const Brand = () => {
  const lng = useContext(LanguageContext);
  const { language } = lng;

  useEffect(() => {
    const ids = ['brand-name', 'brand-sub'];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng]);

  return (
    <div className="brand">
      <h3 className="brand__name" id="brand-name">
        {language === 'en' ? 'kento takeuchi' : '竹内健人'}
      </h3>
      <h3 className="brand__sub" id="brand-sub">
        {language === 'en'
          ? 'web developer | soccer player (amature) | santa clara'
          : 'ウェブ開発者｜サッカー選手（アマチュア）｜サンタクララ'}
      </h3>
    </div>
  );
};

export default Brand;
