import React, {Component, ReactNode} from 'react';
import {Link} from 'gatsby';

import s from './joinUsItem.module.scss';
import BaseIcon from '../../baseIcon/baseIcon';

interface JoinUsProps {
    item: {};
}

class JoinUsItem extends Component<JoinUsProps> {
    render(): ReactNode {
        const {item} = this.props;

        return (
            <Link to={item.path} className={s.wrap}>
                <div className={s.content}>
                    <span className={s.title}>{item.title}</span>
                    <span className={s.address}>{item.address}</span>
                    <span className={s.text}>{item.text}</span>
                </div>
                <div className={s.wrapArrow}>
                    <BaseIcon name="arrow" />
                </div>
            </Link>
        );
    }
}

export default JoinUsItem;
