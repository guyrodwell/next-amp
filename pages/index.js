import React from 'react';
import { useAmp } from 'next/amp';

import Layout from '../components/Layout';
import App from '../components/App';

export const config = { amp: 'hybrid' };

const Home = () => {
  const isAmp = useAmp();

  return (
    <Layout>
      <App isAmp={isAmp} />
    </Layout>
  );
};

export default Home;
