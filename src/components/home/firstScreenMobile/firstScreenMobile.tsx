import React, {Component, ReactNode} from 'react';

import s from './firstScreenMobile.module.scss';

class FirstScreenMobile extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.wrapContent}>
                    <div className={s.content}>
                        <h1 className={s.title}>
                            Work
                            <br />
                            With Us
                        </h1>
                        <p className={s.desc}>
                            We are a worldwide e-commerce
                            <br />
                            leader in the eyewear industry.
                        </p>
                        <a className={s.applyNow} href="mailto:example.com">
                            Apply Now
                        </a>
                    </div>
                </div>
                <div className={s.bg} />
            </div>
        );
    }
}

export default FirstScreenMobile;
