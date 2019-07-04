import React, {ReactNode} from 'react';

import useSiteMetadata from 'hooks/useSiteMetaData';
import BaseIcon from 'components/baseIcon/baseIcon';
import MenuLink from 'components/menuLink/menuLink';

import {SiteSiteMetadataMenuLinks} from 'types';

import s from './footer.module.scss';

/**
 * Component main footer
 * @returns {RactNode} return component footer
 */
const Footer = (): ReactNode => {
    const {menuLinks, contact} = useSiteMetadata();

    return (
        <div className={s.container}>
            <div className={s.inner}>
                <div className={s.wrap}>
                    <div className={s.wrapLogo}>
                        <BaseIcon name="optimax" />
                    </div>
                    {menuLinks.map(
                        (item: SiteSiteMetadataMenuLinks): ReactNode => {
                            if (item.link) {
                                return (
                                    <MenuLink
                                        key={item.name}
                                        name={item.name}
                                        size="small"
                                        color={['gray']}
                                        link={item.link}
                                    />
                                );
                            } else {
                                return (
                                    <MenuLink color={['gray']} size="small" key={item.name} name={item.name} />
                                );
                            }
                        },
                    )}
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
};

export default Footer;
