import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import s from './hamburger.module.scss';

class Hamburger extends Component {
    render(): ReactNode {
        return (
            <div className={classNames(s.wrapHamburger)}>
                <div className={s.inner} />
            </div>
        );
    }
}

export default Hamburger;
