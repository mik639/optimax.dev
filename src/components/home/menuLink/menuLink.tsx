import React, {PureComponent, ReactNode} from 'react';
import {scroller} from 'react-scroll';
import classNames from 'classnames';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './menuLink.module.scss';

interface MenuLinkProps {
    name: string;
    link?: string;
    isBlack: boolean;
}

class MenuLink extends PureComponent<MenuLinkProps> {
    /**
     *  Scroll to block by name
     * @param {string} name - name block
     */
    onClick = (name: string) => () => {
        scroller.scrollTo(name, {
            duration: 700,
            smooth: true,
            isDynamic: true,
            offset: -100,
        });
    };

    render(): ReactNode {
        const {name, link, isBlack} = this.props;

        if (link) {
            return (
                <a className={s.link} href={link}>
                    <BaseIcon name={name} width={24} height={24} />
                    <span className={classNames(s.name, {[s.black]: isBlack})}>{name}</span>
                </a>
            );
        }

        return (
            <span className={s.link}>
                <BaseIcon name={name} width={24} height={24} />
                <span
                    onClick={this.onClick(name)}
                    className={classNames(s.name, {[s.black]: isBlack})}
                >
                    {name}
                </span>
            </span>
        );
    }
}

export default MenuLink;
