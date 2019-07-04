import React, {PureComponent, ReactNode} from 'react';
import {scroller} from 'react-scroll';
import classNames from 'classnames';
import {Link} from 'gatsby';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './menuLink.module.scss';

interface MenuLinkProps {
    name: string;
    link?: string;
    color: string[];
    size?: string;
}

class MenuLink extends PureComponent<MenuLinkProps> {
    static defaultProps = {
        link: '',
        size: 'big',
    };

    /**
     *  Scroll to block by name
     * @param {string} name - name block
     */
    onClick = (name: string): (() => void) => () => {
        scroller.scrollTo(name, {
            duration: 700,
            smooth: true,
            isDynamic: true,
            offset: -100,
        });
    };

    getColorClasses = () => this.props.color.map(className => s[className]);

    render(): ReactNode {
        const {name, link, size} = this.props;

        const classes = this.getColorClasses();

        if (link) {
            return (
                <Link
                    className={classNames(s.link, ...classes, s[size])}
                    to={link}
                    state={{prevPath: location.pathname}}
                >
                    <BaseIcon name={name} width={24} height={24} />
                    <span className={s.name}>{name}</span>
                </Link>
            );
        }

        return (
            <span className={classNames(s.link, ...classes, s[size])}>
                <BaseIcon name={name} width={24} height={24} />
                <span onClick={this.onClick(name)} className={s.name}>
                    {name}
                </span>
            </span>
        );
    }
}

export default MenuLink;
