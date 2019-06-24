import React, {ReactNode} from 'react';

import Layout from 'layouts/index';
import JobByLocation from 'components/home/jobByLocation/jobByLocation';
import AboutUs from 'components/home/aboutUs/aboutUs';
import Header from 'components/header/header';
import FirstScreen from 'components/home/firstScreen/firstScreen';
import JoinUs from 'components/home/joinUs/joinUs';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';
import Footer from 'components/footer/footer';

const Home = (): ReactNode => (
    <Layout>
        <Header />
        <FirstScreen />
        <AboutUs />
        <JobByLocation />
        <JoinUs />
        <Team />
        <Benefits />
        <Footer />
    </Layout>
);

export default Home;
