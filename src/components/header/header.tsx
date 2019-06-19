import React, {Component, ReactNode} from 'react';

import LeftBox from 'components/leftBox/leftBox';
import RightBox from 'components/rightBox/rightBox';

import s from './header.module.scss';

class Header extends Component {
    render(): ReactNode {
        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <LeftBox />
                    <RightBox />
                </div>
            </div>
        );
    }
}

export default Header;
