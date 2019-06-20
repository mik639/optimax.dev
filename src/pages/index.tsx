import React, {ReactNode} from 'react';
import MediaQuery from 'react-responsive';

import Tentacle from 'components/home/tentacle/tentacle';
import AboutUs from 'components/home/aboutUs/aboutUs';
import AboutUsMobile from 'components/home/aboutUsMobile/aboutUsMobile';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import HeaderMobile from 'components/headerMobile/headerMobile';
import FirstScreenMobile from 'components/home/firstScreenMobile/firstScreenMobile';
import FirstScreen from 'components/home/firstScreen/firstScreen';
import JoinUs from 'components/home/joinUs/joinUs';
import JoinUsMobile from 'components/home/joinUsMobile/joinUsMobile';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';
import Footer from 'components/footer/footer';

const Home = (): ReactNode => (
    <Layout>
        <MediaQuery query="(min-device-width: 1024px)">
            <Tentacle>
                <Header />
                <FirstScreen />
                <AboutUs />
                <JoinUs />
                <Team />
                <Benefits />
            </Tentacle>
        </MediaQuery>

        <MediaQuery query="(max-device-width: 1024px)">
            <Header />
            <FirstScreenMobile />
            <AboutUs />
            <JoinUsMobile />
            <Team />
            <Benefits />
        </MediaQuery>

        <Footer />
    </Layout>
);

export default Home;
