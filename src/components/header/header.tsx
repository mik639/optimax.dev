import React, {Component, ReactNode} from 'react';

import LeftBox from 'components/leftBox/leftBox';
import RightBox from 'components/rightBox/rightBox';
import Hamburger from 'components/hamburger/hamburger';

import s from './header.module.scss';

class Header extends Component {
    render(): ReactNode {
        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <LeftBox />
                    <RightBox />
                    <Hamburger />
                </div>
            </div>
        );
    }
}

export default Header;
