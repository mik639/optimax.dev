import React from 'react';
import Layout from '../layouts/index';
import Header from '../components/header/header';
import FirstScreenBg from '../components/firstScreenBg/firstScreenBg';
import FirstScreenContent from '../components/firstScreenContent/firstScreenContent';

const Home = props => (
    <Layout>
      <Header/>
      <FirstScreenBg />
      <FirstScreenContent />
    </Layout>
);

export default Home;
