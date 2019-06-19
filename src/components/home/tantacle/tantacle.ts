import React, { Component, ReactNode} from 'react';

import s from './tentacle.module.scss';


class Tentacle extends Component {
    render(): ReactNode {
        const { children } = this.props;
    
        return (
            <div className={s.wrap}>{children}</div>
        );
    }
}

export default Tentacle;
