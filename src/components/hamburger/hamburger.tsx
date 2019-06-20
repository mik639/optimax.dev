import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import Menu from 'components/menu/menu';

import s from './hamburger.module.scss';

interface HamburgerStateType {
    isOpen: boolean;
}

class Hamburger extends Component<null, HamburgerStateType> {
    state = {
        isOpen: false,
    };

    /**
     * Change visability menu
     */
    changeVisibilityMenu = () => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render(): ReactNode {
        const {isOpen} = this.state;

        return (
            <div className={s.wrap}>
                <div
                    className={classNames(s.wrapHamburger, {[s.open]: isOpen})}
                    onClick={this.changeVisibilityMenu}
                >
                    <div className={s.inner} />
                </div>
                <Menu isOpen={isOpen} />
            </div>
        );
    }
}

export default Hamburger;
