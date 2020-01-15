import React from 'react';

import GlobalStyle from './styles/GlobalStyle';

const Layout = props => (
  <>
    <GlobalStyle />
    {props.children}
  </>
);

export default Layout;
