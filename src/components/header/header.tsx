import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import BaseIcon from 'components/baseIcon/baseIcon';
import Button from 'components/button/button';
import Hamburger from 'components/hamburger/hamburger';
import Menu from 'components/menu/menu';

import s from './header.module.scss';

interface HeaderProps {
    isFixed: boolean;
}

class Header extends Component<HeaderProps> {
    render(): ReactNode {
        const {isFixed} = this.props;

        return (
            <div className={classNames(s.container, {[s.fixed]: isFixed})}>
                <div className={s.wrap}>
                    <div className={s.leftBox}>
                        <div className={s.wrapLogo}>
                            <BaseIcon name="optimax" />
                        </div>
                        <Menu isFixed={isFixed} />
                    </div>
                    <div className={s.rightBox}>
                        <div className={s.wrapLanguage}>
                            <BaseIcon name="language" />
                        </div>
                        <Button className={s.btn} color={isFixed ? 'blue' : 'white'} href={''}>
                            <span className={s.btnText}>Apply</span>
                        </Button>
                    </div>
                    <Hamburger isBlack={isFixed} />
                </div>
            </div>
        );
    }
}

export default Header;
