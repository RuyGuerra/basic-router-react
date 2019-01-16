import React, { Fragment } from 'react';
import MenuBar from '../MenuBar/MenuBar';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <main>
        <MenuBar>Basic Router</MenuBar>
        {children}
      </main>
    </Fragment>
  );
};

export default Layout;
