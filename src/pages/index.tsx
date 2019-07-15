import React, {ReactNode} from 'react';

import Layout from 'layouts/index';
import JobByLocation from 'components/home/jobByLocation/jobByLocation';
import AboutUs from 'components/home/aboutUs/aboutUs';
import WrapHeader from 'components/wrapHeader/wrapHeader';
import FirstScreen from 'components/home/firstScreen/firstScreen';
import JoinUs from 'components/joinUs/joinUs';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';

const Home = (): ReactNode => (
    <Layout bodyClass="sasdad">
        <WrapHeader isHome />
        <FirstScreen />
        <AboutUs />
        <JobByLocation />
        <JoinUs />
        <Team />
        <Benefits />
    </Layout>
);

export default Home;
