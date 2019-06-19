import React from 'react';
import MediaQuery from 'react-responsive';

import AboutUs from 'components/aboutUs/aboutUs';
import AboutUsMobile from 'components/aboutUsMobile/aboutUsMobile';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import FirstScreenBg from 'components/firstScreenBg/firstScreenBg';
import FirstScreenBgMobile from 'components/firstScreenBgMobile/firstScreenBgMobile';
import FirstScreenContent from 'components/firstScreenContent/firstScreenContent';
import Benefits from 'components/home/benefits';
import Footer from 'components/footer/footer';
import FirstScreenContentMobile from 'components/firstScreenContentMobile/firstScreenContentMobile';

const Home = props => (
    <Layout>
      <MediaQuery query="(min-device-width: 975px)">
        <Header/>
        <FirstScreenBg />
        <FirstScreenContent />
        <AboutUs />
      </MediaQuery>

      <MediaQuery query="(max-device-width: 975px)">
        <HeaderMobile/>
        <FirstScreenBgMobile/>
        <FirstScreenContentMobile/>
        <AboutUsMobile/>
      </MediaQuery>

      <Benefits />
      <Footer />
    </Layout>
);

export default Home;
