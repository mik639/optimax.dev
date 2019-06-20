import React, {ReactNode} from 'react';
import MediaQuery from 'react-responsive';

import Tentacle from 'components/home/tentacle/tentacle';
import AboutUs from 'components/home/aboutUs/aboutUs';
import AboutUsMobile from 'components/home/aboutUsMobile/aboutUsMobile';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import FirstScreenBg from 'components/home/firstScreenBg/firstScreenBg';
import FirstScreenBgMobile from 'components/home/firstScreenBgMobile/firstScreenBgMobile';
import FirstScreenContent from 'components/home/firstScreenContent/firstScreenContent';
import JoinUs from 'components/home/joinUs/joinUs';
import JobByLocation from 'components/home/jobByLocation/jobByLocation';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';
import Footer from 'components/footer/footer';
import FirstScreenContentMobile from 'components/home/firstScreenContentMobile/firstScreenContentMobile';

const Home = (): ReactNode => (
    <Layout>
        <MediaQuery query="(min-device-width: 1024px)">
            <Tentacle>
                <Header />
                <FirstScreenBg />
                <FirstScreenContent />
                <AboutUs />
                <JobByLocation />
                <JoinUs />
                <Team />
                <Benefits />
            </Tentacle>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1024px)">
            <HeaderMobile />
            <FirstScreenBgMobile />
            <FirstScreenContentMobile />
            <AboutUsMobile />
            <JobByLocation />
            <JoinUs />
            <Team />
            <Benefits />
        </MediaQuery>

        <Footer />
    </Layout>
);

export default Home;
