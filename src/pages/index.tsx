import React, {ReactNode} from 'react';

import Tentacle from 'components/home/tentacle/tentacle';
import AboutUs from 'components/home/aboutUs/aboutUs';
import Layout from 'layouts/index';
import Header from 'components/header/header';
import FirstScreen from 'components/home/firstScreen/firstScreen';
import JoinUs from 'components/home/joinUs/joinUs';
import Benefits from 'components/home/benefits';
import Team from 'components/home/team';
import Footer from 'components/footer/footer';

const Home = (): ReactNode => (
    <Layout>
        <Tentacle>
            <Header />
            <FirstScreen />
            <AboutUs />
            <JoinUs />
            <Team />
            <Benefits />
            <Footer />
        </Tentacle>
    </Layout>
);

export default Home;
