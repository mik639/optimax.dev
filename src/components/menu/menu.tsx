import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

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
                        About Us
                    </a>
                    <a className={s.link} href="#">
                        Location
                    </a>
                    <a className={s.link} href="#">
                        Careers
                    </a>
                    <a className={s.link} href="#">
                        Our team
                    </a>
                    <a className={s.link} href="#">
                        Blog
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
