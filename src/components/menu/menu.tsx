import React, {ReactNode} from 'react';
import classNames from 'classnames';
import useSiteMetadata from 'hooks/useSiteMetaData';

import MenuLink from 'components/menuLink/menuLink';

import {SiteSiteMetadataMenuLinks} from '../../types';

import s from './menu.module.scss';

interface MenuProps {
    isOpen: boolean;
    isFixed: boolean;
}

const Menu = ({isOpen, isFixed}: MenuProps): ReactNode => {
    const {menuLinks, contact} = useSiteMetadata();

    return (
        <div className={classNames(s.wrap, {[s.open]: isOpen}, {[s.fixed]: isFixed})}>
            <nav className={s.list}>
                {menuLinks.map(
                    (item: SiteSiteMetadataMenuLinks): ReactNode => {
                        if (item.link) {
                            return (
                                <MenuLink
                                    key={item.name}
                                    isBlack={isFixed}
                                    name={item.name}
                                    link={item.link}
                                />
                            );
                        } else {
                            return <MenuLink key={item.name} isBlack={isFixed} name={item.name} />;
                        }
                    },
                )}
                <a className={s.apply} href={`mailto:${contact.email}`}>
                    Apply
                </a>
            </nav>
        </div>
    );
};

export default Menu;
