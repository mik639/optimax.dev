import React, {Component, ReactNode} from 'react';

import s from './firstScreenContentMobile.module.scss';

class FirstScreenContentMobile extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.content}>
                    <h1 className={s.title}>
                        Work
                        <br />
                        With Us
                    </h1>
                    <span className={s.desc}>
                        We are a worldwide e-commerce
                        <br />
                        leader in the eyewear industry.
                    </span>
                    <a className={s.applyNow} href="mailto:example.com">
                        Apply Now
                    </a>
                </div>
            </div>
        );
    }
}

export default FirstScreenContentMobile;
