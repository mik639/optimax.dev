import React, {Component, ReactNode} from 'react';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './header.module.scss';

class HeaderMobile extends Component {
    render(): ReactNode {
        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.wrapLogo}>
                        <BaseIcon name="optimax" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderMobile;
