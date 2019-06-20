import React, {Component, ReactNode} from 'react';
import {Link} from 'gatsby';

import s from './joinUsItem.module.scss';

interface JoinUsProps {
    item: {};
}

class JoinUsItem extends Component<JoinUsProps> {
    render(): ReactNode {
        const {item} = this.props;

        return (
            <div className={s.wrap}>
                <Link to={item.path} className={s.title}>
                    {item.title}
                </Link>
                <span className={s.address}>{item.address}</span>
                <span className={s.text}>{item.text}</span>
            </div>
        );
    }
}

export default JoinUsItem;
