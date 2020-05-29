import React, { useState, useEffect, useContext } from 'react';

import './MainNavigation.scss';
import MainHeader from '../MainHeader/MainHeader';
import MainFooter from '../MainFooter/MainFooter';
import Brand from '../Brand/Brand';
import NavLinks from '../NavLinks/NavLinks';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../UIElements/Backdrop/Backdrop';
import SNS from '../SNS/SNS';
import Language from '../Language/Language';
import { shuffleText } from '../../../util/suffleText';
import { LanguageContext } from '../../../../shared/context/language-context';

const MainNavigation = (props) => {
  const lng = useContext(LanguageContext);

  useEffect(() => {
    shuffleText('copyright');
  }, []);

  // Local state
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  // Side drawer handler (open & close)
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };
  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  // const mq = window.matchMedia('(max-width: 37.5em)');
  // console.log({ mq });

  return (
    <div className="main-navigation">
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="side-drawer__nav">
          <NavLinks className="nav-links--side-drawer" />
          <SNS className="sns--side-drawer" width="15" height="15" />
          <Language className="language--side-drawer" />
        </nav>
      </SideDrawer>

      <Brand />

      <MainHeader className="main-header">
        <button className="main-header__menu-btn" onClick={openDrawerHandler}>
          <span />
          <span />
          <span />
        </button>
        <nav className="main-header__nav">
          <NavLinks className="nav-links--main-header" />
          <SNS className="sns--main-header" width="15" height="15" />
          <div className="main-header__nav--right-box">
            <Language className="language--main-header" />
          </div>
        </nav>
      </MainHeader>

      <main className="main-navigation__main">{props.children}</main>

      <MainFooter className="main-footer">
        <small
          className="main-footer__copyright"
          id="copyright"
        >{`© ${new Date().getFullYear()} kento takeuchi`}</small>
      </MainFooter>
    </div>
  );
};

export default MainNavigation;
