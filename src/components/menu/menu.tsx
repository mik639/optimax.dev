import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import {scroller} from 'react-scroll';
import {StaticQuery, graphql} from 'gatsby';

import {ABOUT_US, OUR_TEAM, LOCATION} from 'constants/anchors';
import {MAIL_TO} from 'constants/mailTo';

import BaseIcon from 'components/baseIcon/baseIcon';

import s from './menu.module.scss';

interface MenuProps {
    isOpen: boolean;
    isFixed: boolean;
}

class Menu extends Component<MenuProps> {
    onClick = (name: string) => () => {
        scroller.scrollTo(name, {
            duration: 700,
            smooth: true,
            isDynamic: true,
            offset: -200,
        });
    };

    render(): ReactNode {
        const {isOpen, isFixed} = this.props;

        return (
            <StaticQuery
                query={menuQuery}
                render={(data) => {
                    console.log(data);
                    return (
                        <div
                            className={classNames(s.wrap, {[s.open]: isOpen}, {[s.fixed]: isFixed})}
                        >
                            <nav className={s.list}>
                                {/* {menuLinks && menuLinks.map(item => {
                                    if (item.link) {
                                        return (
                                            <a className={s.link} href={item.link}>
                                                <BaseIcon name={item.name} width={24} height={24} />
                                                <span className={s.name}>{item.name}</span>
                                            </a>
                                        );
                                    } else {
                                        return (
                                            <span className={s.link}>
                                                <BaseIcon name={item.name} width={24} height={24} />
                                                <span
                                                    onClick={this.onClick(item.name)}
                                                    className={s.name}
                                                >
                                                    {item.name}
                                                </span>
                                            </span>
                                        );
                                    }
                                })} */}
                                <a className={s.apply} href={MAIL_TO}>
                                    Apply
                                </a>
                            </nav>
                        </div>
                    );
                }}
            />
        );
    }
}

const menuQuery = graphql`
    query DefaultMenuQuery {
        site {
            siteMetadata {
                menuLinks {
                    name
                    link
                }
            }
        }
    }
`;

export default Menu;
