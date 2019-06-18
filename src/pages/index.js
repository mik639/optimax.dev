import React from 'react';
import AboutUs from 'components/aboutUs/aboutUs';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import FirstScreenBg from 'components/firstScreenBg/firstScreenBg';
import FirstScreenContent from 'components/firstScreenContent/firstScreenContent';
import Benefits from 'components/benefits';
import Footer from 'components/footer/footer';

const Home = props => (
    <Layout>
      <Header/>
      <FirstScreenBg />
      <FirstScreenContent />
      <AboutUs />
      <Benefits />
      <Footer />
    </Layout>
);

export default Home;
