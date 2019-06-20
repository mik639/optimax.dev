import React, {Component, ReactNode} from 'react';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './aboutUsMobile.module.scss';

class AboutUsMobile extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.wrapText}>
                    <div>
                        <h2 className={s.title}>About Us</h2>
                        <span className={s.desc}>
                            We change the way people
                            <br />
                            buy glasses
                        </span>
                    </div>
                    <p className={s.text}>
                        We founded Optimax in 2008 to change the
                        <br />
                        way people buy glasses, both in terms of
                        <br />
                        price as well as convenience.
                        <br />
                        <br />
                        Optimax operates several subsidiaries, such
                        <br />
                        as GlassesUSA, Ottica and UVP, that all
                        <br />
                        deliver affordable eyewear across different
                        <br />
                        platforms while targeting varied and
                        <br />
                        segmented markets.
                    </p>
                </div>
                <div className={s.projects}>
                    <a href="#" className={s.item}>
                        <BaseIcon name="uvp" />
                    </a>
                    <a href="#" className={s.item}>
                        <BaseIcon name="glassesusa" />
                    </a>
                    <a href="#" className={s.item}>
                        <BaseIcon name="ottica" />
                    </a>
                </div>
            </div>
        );
    }
}

export default AboutUsMobile;
