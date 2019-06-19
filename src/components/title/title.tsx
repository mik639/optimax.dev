import React, {Component, ReactNode} from 'react';

import s from './title.module.scss';

interface TitleProps {
    children: ReactNode;
}

class Title extends Component<TitleProps> {
    render(): ReactNode {
        const {children} = this.props;
        return <h2 className={s.title}>{children}</h2>;
    }
}

export default Title;
