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
import Benefits from 'components/benefits';
import Footer from 'components/footer/footer';
import FirstScreenContentMobile from 'components/firstScreenContentMobile/firstScreenContentMobile';

const Home = props => (
    <Layout>
      <MediaQuery query="(min-device-width: 975px)">
        <Header/>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 975px)">
        <HeaderMobile/>
      </MediaQuery>
      <MediaQuery query="(min-device-width: 975px)">
        <FirstScreenBg />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 975px)">
        <FirstScreenBgMobile/>
      </MediaQuery>

      <MediaQuery query="(min-device-width: 975px)">
        <FirstScreenContent />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 975px)">
        <FirstScreenContentMobile/>
      </MediaQuery>

      <MediaQuery query="(min-device-width: 975px)">
        <AboutUs />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 975px)">
        <AboutUsMobile/>
      </MediaQuery>

      <Benefits />
      <Footer />
    </Layout>
);

export default Home;
