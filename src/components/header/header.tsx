import React from 'react';
import classNames from 'classnames';
import {Link} from 'gatsby';

import useSiteMetadata from 'hooks/useSiteMetaData';
import BaseIcon from 'components/baseIcon/baseIcon';
import Button from 'components/button/button';
import Hamburger from 'components/hamburger/hamburger';
import Menu from 'components/menu/menu';

import s from './header.module.scss';

interface HeaderProps {
    isFixed: boolean;
}
const Header: React.SFC<HeaderProps> = ({isFixed}: HeaderProps): React.ReactElement => {
    const {contact} = useSiteMetadata();
    return (
        <div className={classNames(s.container, {[s.fixed]: isFixed})}>
            <div className={s.wrap}>
                <div className={s.leftBox}>
                    <Link to="/" className={s.wrapLogo}>
                        <BaseIcon name="optimax" />
                    </Link>
                    <Menu isFixed={isFixed} />
                </div>
                <div className={s.rightBox}>
                    <div className={s.wrapLanguage}>
                        <BaseIcon name="language" />
                    </div>
                    <Button
                        className={s.btn}
                        color={isFixed ? 'blue' : 'white'}
                        href={`mailto:${contact.email}`}
                    >
                        <span className={s.btnText}>Apply</span>
                    </Button>
                </div>
                <Hamburger isBlack={isFixed} />
            </div>
        </div>
    );
};

export default Header;
