import React, {Component, ReactNode} from 'react';

import s from './firstScreenBgMobile.module.scss';

class FirstScreenBgMobile extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <div className={s.astronaut} />
            </div>
        );
    }
}

export default FirstScreenBgMobile;
