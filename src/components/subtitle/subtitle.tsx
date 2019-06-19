import React, {Component, ReactNode} from 'react';

import s from './subtitle.module.scss';

interface TitleProps {
    children: ReactNode;
}

class Subtitle extends Component<TitleProps> {
    render(): ReactNode {
        return <h3 className={s.subtitle}>{this.props.children}</h3>;
    }
}

export default Subtitle;
