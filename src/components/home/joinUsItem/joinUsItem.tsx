import React, {Component, ReactNode} from 'react';

import s from './joinUsItem.module.scss';

interface JoinUsProps {
    item: {};
}

class JoinUsItem extends Component<JoinUsProps> {
    render(): ReactNode {
        const {item} = this.props;

        return (
            <div className={s.wrap}>
                <span className={s.title}>{item.title}</span>
                <span className={s.address}>{item.address}</span>
                <p className={s.text}>{item.text}</p>
            </div>
        );
    }
}

export default JoinUsItem;
