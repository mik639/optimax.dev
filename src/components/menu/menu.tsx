import React, {ReactNode} from 'react';
import classNames from 'classnames';

import useSiteMetadata from 'hooks/useSiteMetaData';
import MenuLink from 'components/menuLink/menuLink';
import Button from 'components/button/button';

import {SiteSiteMetadataMenuLinks} from 'types';

import s from './menu.module.scss';

interface MenuProps {
    isOpen: boolean;
    isFixed: boolean;
}

const Menu: React.FunctionComponent<MenuProps> = ({
    isOpen,
    isFixed,
}: MenuProps): React.ReactElement => {
    const {menuLinks, contact} = useSiteMetadata();

    const colors = isFixed ? ['black'] : ['white', 'black'];

    return (
        <div className={classNames(s.wrap, {[s.open]: isOpen}, {[s.fixed]: isFixed})}>
            <nav className={s.list}>
                {menuLinks.map(
                    (item: SiteSiteMetadataMenuLinks): ReactNode => {
                        if (item.link) {
                            return (
                                <MenuLink
                                    key={item.name}
                                    color={colors}
                                    name={item.name}
                                    icon={item.icon}
                                    link={item.link}
                                />
                            );
                        } else {
                            return (
                                <MenuLink
                                    key={item.name}
                                    color={colors}
                                    name={item.name}
                                    icon={item.icon}
                                />
                            );
                        }
                    },
                )}
                <Button className={s.btn} href={`mailto:${contact.email}`}>
                    <span className={s.btnText}>Apply</span>
                </Button>
            </nav>
        </div>
    );
};

export default Menu;
