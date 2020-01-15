import React from 'react';
import Head from 'next/head'
import { useAmp } from 'next/amp';

import Layout from '../components/Layout';
import App from '../components/App';

export const config = { amp: 'hybrid' };

const Home = () => {
  const isAmp = useAmp();

  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <App isAmp={isAmp} />
    </Layout>
  );
};

export default Home;
