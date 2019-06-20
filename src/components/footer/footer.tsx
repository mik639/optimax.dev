import React, {Component, ReactNode} from 'react';

import BaseIcon from '../baseIcon/baseIcon';

import s from './footer.module.scss';

class Footer extends Component {
    render(): ReactNode {
        return (
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.wrapLogo}>
                        <BaseIcon name="optimax" />
                    </div>
                    <a className={s.menuLink} href="#">
                        About Us
                    </a>
                    <a className={s.menuLink} href="#">
                        Location
                    </a>
                    <a className={s.menuLink} href="#">
                        Careers
                    </a>
                    <a className={s.menuLink} href="#">
                        Our Team
                    </a>
                    <a className={s.menuLink} href="#">
                        Blog
                    </a>
                </div>
                <div className={s.socialLinks}>
                    <a href="#" className={s.socialLink}>
                        <BaseIcon name="facebook" />
                    </a>
                    <a href="#" className={s.socialLink}>
                        <BaseIcon name="instagram" />
                    </a>
                    <a href="#" className={s.socialLink}>
                        <BaseIcon name="twitter" />
                    </a>
                    <a href="#" className={s.socialLink}>
                        <BaseIcon name="youtube" />
                    </a>
                    <a href="#" className={s.socialLink}>
                        <BaseIcon name="linkdin" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
