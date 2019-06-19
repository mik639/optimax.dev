import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import Hamburger from 'components/hamburger/hamburger';

import s from './menuMobile.module.scss';

class MenuMobile extends Component {
    state = {
        open: false,
    };

    onClick = () => {
        this.setState({open: !this.state.open});
    };

    render(): ReactNode {
        return (
            <div className={s.wrap}>
                <Hamburger />
            </div>
        );
    }
}

export default MenuMobile;