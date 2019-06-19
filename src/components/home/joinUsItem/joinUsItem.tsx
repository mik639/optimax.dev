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
                <a href="#" className={s.title}>{item.title}</a>
                <span className={s.address}>{item.address}</span>
                <a className={s.text}>{item.text}</a>
            </div>
        );
    }
}

export default JoinUsItem;
