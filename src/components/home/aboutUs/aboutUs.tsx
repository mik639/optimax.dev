import React, {ReactNode} from 'react';
import {Element} from 'react-scroll';
import {Link} from 'gatsby';

import Title from 'components/title/title';
import Subtitle from 'components/subtitle/subtitle';
import BaseIcon from 'components/baseIcon/baseIcon';

import s from './aboutUs.module.scss';

const AboutUs = (): ReactNode => (
    <Element name="#aboutUs" className={s.wrap}>
        <div className={s.wrapText}>
            <div className={s.wrapTitle}>
                <Title>About Us</Title>
                <Subtitle>We change the way people buy glasses</Subtitle>
            </div>
            <p className={s.text}>
                We founded Optimax in 2008 to change the way people buy glasses, both in terms of
                price as well as convenience. Optimax operates several subsidiaries, such as
                GlassesUSA, Ottica and UVP, that all deliver affordable eyewear across different
                platforms while targeting varied and segmented markets.
            </p>
        </div>
        <div className={s.projects}>
            <Link to="/uvp" className={s.item}>
                <BaseIcon name="uvp" />
            </Link>
            <Link to="/glassesusa" className={s.item}>
                <BaseIcon name="glassesusa" />
            </Link>
            <Link to="/ottica" className={s.item}>
                <BaseIcon name="ottica" />
            </Link>
        </div>
    </Element>
);

export default AboutUs;
