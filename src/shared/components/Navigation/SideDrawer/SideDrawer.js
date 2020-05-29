import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.scss';

const SideDrawer = (props) => {
  console.log({ props });

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
