import React, {Component, ReactNode} from 'react';

import s from './joinUsItemMobile.module.scss';

interface JoinUsProps {
    item: {};
}

class JoinUsItemMobile extends Component<JoinUsProps> {
    render(): ReactNode {
        const {item} = this.props;

        return (
            <div className={s.wrap}>
                <a href="#" className={s.title}>
                    {item.title}
                </a>
                <span className={s.address}>{item.address}</span>
            </div>
        );
    }
}

export default JoinUsItemMobile;
