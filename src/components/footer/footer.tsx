import React, {ReactNode} from 'react';

import BaseIcon from '../baseIcon/baseIcon';

import s from './footer.module.scss';

/**
 * Component main footer
 * @returns {RactNode} return component footer
 */
const Footer = (): ReactNode => (
    <div className={s.container}>
        <div className={s.inner}>
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
    </div>
);

export default Footer;
