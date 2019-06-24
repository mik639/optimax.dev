import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './menu.module.scss';

interface MenuProps {
    isOpen: boolean;
}

class Menu extends Component<MenuProps> {
    render(): ReactNode {
        const {isOpen} = this.props;

        return (
            <div className={classNames(s.wrap, {[s.open]: isOpen})}>
                <nav className={s.list}>
                    <a className={s.link} href="#">
                        <BaseIcon name="aboutUs" width={24} height={24} />
                        <span className={s.name}>About Us</span>
                    </a>
                    <a className={s.link} href="#">
                        <BaseIcon name="location" width={24} height={24} />
                        <span className={s.name}>Location</span>
                    </a>
                    <a className={s.link} href="#">
                        <BaseIcon name="careers" width={24} height={24} />
                        <span className={s.name}>Careers</span>
                    </a>
                    <a className={s.link} href="#">
                        <BaseIcon name="ourTeam" width={24} height={24} />
                        <span className={s.name}>Our team</span>
                    </a>
                    <a className={s.link} href="#">
                        <BaseIcon name="blog" width={24} height={24} />
                        <span className={s.name}>Blog</span>
                    </a>
                    <a className={s.apply} href="mailto:example.com">
                        Apply
                    </a>
                </nav>
            </div>
        );
    }
}

export default Menu;
