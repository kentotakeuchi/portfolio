import React, { useContext, useEffect } from 'react';

import './Profile.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';
import Resume from '../../../asset/docs/kento-takeuchi__resume.pdf';

const portrait =
  'https://images.unsplash.com/photo-1547508446-e097049cade7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const Profile = () => {
  const lng = useContext(LanguageContext);
  const { language } = lng;

  useEffect(() => {
    const ids = [
      'profile__name',
      'profile__job',
      'profile__sub',
      'profile__desc-1',
      'profile__desc-2',
      'profile__desc-3',
      'profile__desc-4',
      'profile__resume',
    ];

    ids.forEach((id) => {
      shuffleText(id);
    });
  }, [lng]);

  return (
    <div className="profile">
      <header className="profile__head">
        <div className="profile__img-box">
          <Image src={portrait} alt="kento potrait" />
        </div>
        <div className="profile__txt-box">
          <div className="profile__head-box">
            <h2 className="profile__name" id="profile__name">
              {language === 'en' ? 'kento takeuchi' : '竹内健人'}
            </h2>
            <h4 className="profile__job" id="profile__job">
              {language === 'en' ? 'web developer' : 'ウェブ開発者'}
            </h4>
            <h4 className="profile__sub" id="profile__sub">
              {language === 'en' ? 'soccer surfing' : 'サッカー　サーフィン'}
            </h4>
          </div>
        </div>
      </header>

      <div className="profile__body">
        <div className="profile__desc">
          <p id="profile__desc-1">
            {language === 'en'
              ? 'Born in Yamaguchi in 1984. Graduated from Doshisha University in Kyoto with a degree in economics. Spent 8 years working as a sales person at various supermarkets in Tokyo and pursued his passion for soccer and surfing. Came to the U.S. and completed the Certificate Program in Computer Programming of University of California, Santa Cruz, Silicon Valley Extension in 2018.'
              : '1984年山口県生まれ。京都の同志社大学経済学部卒業。都内の様々なスーパーで販売員として8年間働き、サッカーとサーフィンに情熱を注ぐ。渡米し、2018年カリフォルニア大学サンタクルーズ校シリコンバレーエクステンションのコンピュータプログラミングのサーティフィケートプログラムを修了。'}
          </p>
          <p id="profile__desc-2">
            {language === 'en'
              ? 'Kento, JavaScript web developer, has worked hard to do useful things for others with his current skills. As of now, a new project is created and developed as a result of his aspiration to grow as a professional web developer. Recently, he has learned new tools and knowledge related to web development, and also random stuffs in order to broaden his possibility to support others.'
              : 'JavaScriptウェブ開発者の彼は、今のスキルで可能な限り人の役に立てるよう、日々試行錯誤を続けています。現在、プロのウェブ開発者として成長したいという思いから、新たなプロジェクトを立ち上げ、開発を行っています。最近では、ウェブ開発に関連した新しいツールや知識の習得、さらには、人をサポートする可能性を広げるために、ウェブ開発に限らず、様々なことも学んでいます。'}
          </p>
          <p id="profile__desc-3">
            {language === 'en'
              ? 'Outside of his professional career, Kento is an enthusiastic soccer player. Playing soccer seriously helps him not only to work on his technical skills, but also reminds him of the importance of respecting others while teaching himself discipline and finding joy in his life. He used to belong to a soccer team consisting of mainly Japanese players in the San Francisco Premier League, and currently belongs to two multinational local soccer teams in Santa Clara and Hayward.'
              : '仕事以外では、熱狂的なサッカー選手として日々トレーニングを続けています。真剣にサッカーをすることで技術を磨くだけでなく、人を大切にすることの大切さ、自分を律することの大切さ、人生に喜びを見出すことの大切さ、をサッカーは教えてくれます。以前はサンフランシスコ・プレミアリーグの日本人選手を中心としたサッカーチームに所属していましたが、現在はサンタクララとヘイワードの2つの多国籍ローカルサッカーチームに所属しています。'}
          </p>
          <p id="profile__desc-4">
            {language === 'en'
              ? "His family, friends and people he meets are his greatest source of support, without which he couldn't grow and challenge himself to the fullest extent. His passion for his career drives him to excel in his professional endeavors."
              : '彼の最大の支えは、家族、友人、そして彼が出会った全ての人々であり、それなしでは彼は成長できず、自分自身を最大限に成長させ、挑戦することができませんでした。彼のキャリアに対する情熱が、彼のプロとしての活動を成功させる原動力となっています。'}
          </p>
          <div className="profile__resume-box">
            <a
              href={Resume}
              className="profile__resume"
              target="_blank"
              rel="noopener noreferrer"
              id="profile__resume"
            >
              {language === 'en' ? 'resume' : '履歴書'}
            </a>
            <div>&rarr;</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
