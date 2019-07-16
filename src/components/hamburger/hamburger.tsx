import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import Menu from 'components/menu/menu';

import s from './hamburger.module.scss';

interface HamburgerStateType {
    isOpen: boolean;
}

interface HamburgerPropsType {
    isBlack: boolean;
}

class Hamburger extends Component<HamburgerPropsType, HamburgerStateType> {
    state = {
        isOpen: false,
    };

    /**
     * Change visability menu
     */
    changeVisibilityMenu = (): void => {
        this.setState({isOpen: !this.state.isOpen});
    };

    render(): ReactNode {
        const {isOpen} = this.state;
        const {isBlack} = this.props;

        return (
            <div className={classNames(s.wrap, {[s.white]: !isBlack}, {[s.black]: isBlack})}>
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
