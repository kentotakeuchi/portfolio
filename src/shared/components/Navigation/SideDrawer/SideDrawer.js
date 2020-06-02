import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.scss';
import { shuffleText } from '../../../util/suffleText';

const SideDrawer = (props) => {
  console.log({ props });

  const mq = window.matchMedia('(max-width: 37.5em)');

  useEffect(() => {
    // Mobile && Side Drawer is showed
    if (mq.matches && props.show) {
      const ids = [];

      ids.push('brand-name--side-drawer');

      ids.forEach((id) => {
        shuffleText(id);
      });
    }
  }, [mq, props.show]);

  const content = (
    <CSSTransition
      in={props.show}
      timeout={300}
      classNames="slide"
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer" onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;
