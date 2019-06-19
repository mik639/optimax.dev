import React, {Component, ReactNode} from 'react';

import s from './tentacle.module.scss';

interface TentacleProps {
    children: ReactNode;
}

class Tentacle extends Component<TentacleProps> {
    render(): ReactNode {
        const {children} = this.props;

        return <div className={s.wrap}>{children}</div>;
    }
}

export default Tentacle;
