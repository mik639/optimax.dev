import React, {Component, ReactNode} from 'react';

import Header from 'components/header/header';
import Sticky from 'components/sticky/sticky';

import s from './wrapHeader.module.scss';

interface WrapHeaderProps {
    isHome?: boolean;
}

class WrapHeader extends Component<WrapHeaderProps> {
    state = {
        isFixed: false,
    };

    static defaultProps = {
        isHome: false,
    };

    /**
     * is fixed header
     */
    isFixed = (isFixed: boolean): void => {
        this.setState({isFixed});
    };

    render(): ReactNode {
        const {isFixed} = this.state;
        const {isHome} = this.props;

        if (isHome) {
            return (
                <Sticky isFixed={this.isFixed}>
                    <Header isFixed={isFixed} />
                </Sticky>
            );
        }

        return (
            <div className={s.wrap}>
                <div className={s.sticky}>
                    <Header isFixed={true} />
                </div>
            </div>
        );
    }
}

export default WrapHeader;
