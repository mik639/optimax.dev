import React, {ReactNode} from 'react';
import {useMediaQuery} from 'react-responsive';

const Desktop = ({children}) => {
    const isDesktop = useMediaQuery({minWidth: 992});
    return isDesktop ? children : null;
};
const Mobile = ({children}) => {
    const isNotMobile = useMediaQuery({maxWidth: 991});
    return isNotMobile ? children : null;
};

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
import JobByLocation from 'components/home/jobByLocation/jobByLocation';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';
import Footer from 'components/footer/footer';

const Home = (): ReactNode => (
    <Layout>
        <Desktop>
            <Tentacle>
                <Header />
                <FirstScreen />
                <AboutUs />
                <JobByLocation />
                <JoinUs />
                <Team />
                <Benefits />
            </Tentacle>
            <Footer />
        </Desktop>

        <Mobile>
            <HeaderMobile />
            <FirstScreenMobile />
            <AboutUsMobile />
            <JobByLocation />
            <JoinUsMobile />
            <Team />
            <Benefits />
        </Mobile>
    </Layout>
);

export default Home;
