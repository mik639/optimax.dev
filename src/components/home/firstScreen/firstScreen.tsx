import React, {Component, ReactNode} from 'react';

import Title from 'components/title/title';
import Button from 'components/button/button';
import {MAIL_TO} from 'constants/mailTo';

import s from './firstScreen.module.scss';

class FirstScreen extends Component {
    render(): ReactNode {
        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.content}>
                        <Title>Work With Us</Title>
                        <span className={s.desc}>
                            We are a worldwide e-commerce
                            <br />
                            leader in the eyewear industry.
                        </span>
                        <Button className={s.btn} href={MAIL_TO}>
                            <span className={s.btnText}>Apply now</span>
                        </Button>
                    </div>
                    <div className={s.bg} />
                </div>
            </div>
        );
    }
}

export default FirstScreen;
