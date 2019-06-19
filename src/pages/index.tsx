import React, {ReactNode} from 'react';
import MediaQuery from 'react-responsive';

import AboutUs from 'components/home/aboutUs/aboutUs';
import AboutUsMobile from 'components/home/aboutUsMobile/aboutUsMobile';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import FirstScreenBg from 'components/home/firstScreenBg/firstScreenBg';
import FirstScreenBgMobile from 'components/home/firstScreenBgMobile/firstScreenBgMobile';
import FirstScreenContent from 'components/home/firstScreenContent/firstScreenContent';
import Benefits from 'components/home/benefits';
import Footer from 'components/footer/footer';
import FirstScreenContentMobile from 'components/home/firstScreenContentMobile/firstScreenContentMobile';

const Home = (): ReactNode => (
    <Layout>
        <MediaQuery query="(min-device-width: 975px)">
            <Header />
            <FirstScreenBg />
            <FirstScreenContent />
            <AboutUs />
        </MediaQuery>

        <MediaQuery query="(max-device-width: 975px)">
            <HeaderMobile />
            <FirstScreenBgMobile />
            <FirstScreenContentMobile />
            <AboutUsMobile />
        </MediaQuery>

        <Benefits />
        <Footer />
    </Layout>
);

export default Home;
