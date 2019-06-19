import React, {Component, ReactNode} from 'react';

import s from './menu.module.scss';

class Menu extends Component {
    render(): ReactNode {
        return (
            <div className={s.wrap}>
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
                </nav>
            </div>
        );
    }
}

export default Menu;
