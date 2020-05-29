import React from 'react';

import './MainHeader.scss';

const MainHeader = ({ children, className, style }) => {
  return (
    <header className={className} style={{ backgroundColor: style }}>
      {children}
    </header>
  );
};

export default MainHeader;
