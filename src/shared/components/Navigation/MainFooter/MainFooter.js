import React from 'react';

import './MainFooter.scss';

const MainFooter = props => {
  return <footer className={props.className}>{props.children}</footer>;
};

export default MainFooter;
