import React, {Component, ReactNode} from 'react';
import className from 'classnames';

import s from './title.module.scss';

interface TitleProps {
    children: ReactNode;
    isWhite: boolean;
}

class Title extends Component<TitleProps> {
    render(): ReactNode {
        const {children, isWhite} = this.props;
        return <h2 className={className(s.title, {[s.white]: isWhite})}>{children}</h2>;
    }
}

export default Title;
