import React from 'react';
import Head from 'next/head';

import GlobalStyle from './styles/GlobalStyle';

const Layout = props => (
  <>
    <Head>
      <title>Home</title>
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,700&display=swap" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <GlobalStyle />

    {props.children}
  </>
);

export default Layout;
