import React, { useContext, useEffect } from 'react';

import './Profile.scss';
import Image from '../../../shared/components/UIElements/Image/Image';
import { shuffleText } from '../../../shared/util/suffleText';
import { LanguageContext } from '../../../shared/context/language-context';

const portrait =
  'https://images.unsplash.com/photo-1547508446-e097049cade7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

const Profile = () => {
  const lng = useContext(LanguageContext);

  useEffect(() => {
    const ids = [
      'profile__name',
      'profile__job',
      'profile__sub',
      'profile__desc-1',
      'profile__desc-2',
      'profile__desc-3',
      'profile__desc-4',
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
              kento takeuchi
            </h2>
            <h4 className="profile__job" id="profile__job">
              web developer
            </h4>
            <h4 className="profile__sub" id="profile__sub">
              soccer surfing
            </h4>
          </div>
          {/* <div className="profile__detail-box">
            <ul className="profile__detail-web">
              <li className="profile__detail-head">web development</li>
              <li>JavaScript (MERN)</li>
              <li>react native (learning..)</li>
              <li>data structure & algolithms (learning..)</li>
            </ul>
            <ul className="profile__detail-soccer">
              <li className="profile__detail-head">soccer</li>
              <li>CAM, CDM</li>
              <li>pass soccer</li>
              <li>scoring (practicing..)</li>
              <li>ronaldinho</li>
              <li>zidan</li>
            </ul>
          </div> */}
        </div>
      </header>

      <div className="profile__body">
        <p className="profile__desc">
          <span id="profile__desc-1">
            Born in Yamaguchi in 1984. Graduated from Doshisha University in
            Kyoto with a degree in economics. Spent 8 years working as a sales
            person at various supermarkets in Tokyo and pursued his passion for
            soccer and surfing. Came to the U.S.A and completed the Certificate
            Program in Computer Programming of University of California, Santa
            Cruz, Silicon Valley Extension in 2018.
          </span>
          <span id="profile__desc-2">
            Kento, an entry level front-end web developer, works hard to support
            others with his current skills. As of January 2019, a new project is
            created and developed every month as a result of his aspiration to
            grow as a professional web developer. Recently, he has increased his
            skills to include modern frameworks and libraries such as
            React/Redux to develop new web applications.
          </span>
          <span id="profile__desc-3">
            Outside of his professional career, Kento is an enthusiastic soccer
            player. Playing soccer seriously helps him not only to work on his
            technical skills, but also reminds him of the importance of
            respecting others while teaching himself discipline and finding joy
            in his life. He used to belong to a soccer team consisting of mainly
            Japanese players in the San Francisco Premier League, and currently
            belongs to a multinational local soccer team in Santa Clara.
          </span>
          <span id="profile__desc-4">
            His friends, family and people he meets are his greatest source of
            support, without which he couldn't grow and challenge himself to the
            fullest extent. His passion for his career drives him to excel in
            his professional endeavors.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
