import React, {Component, ReactNode} from 'react';

import Title from 'components/title/title';
import BaseIcon from 'components/baseIcon/baseIcon';

import s from './aboutUs.module.scss';

class AboutUs extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.wrapText}>
                    <div>
                        <Title>About us</Title>
                        <span className={s.desc}>We change the way people buy glasses</span>
                    </div>
                    <p className={s.text}>
                        We founded Optimax in 2008 to change the way people buy
                        <br />
                        glasses, both in terms of price as well as convenience.
                        <br />
                        Optimax operates several subsidiaries, such as GlassesUSA,
                        <br />
                        Ottica and UVP, that all deliver affordable eyewear across
                        <br />
                        different platforms while targeting varied and segmented
                        <br />
                        markets.
                    </p>
                </div>
                <div className={s.projects}>
                    <div className={s.item}>
                        <BaseIcon name="uvp" />
                    </div>
                    <div className={s.item}>
                        <BaseIcon name="glassesusa" />
                    </div>
                    <div className={s.item}>
                        <BaseIcon name="ottica" />
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;
