import React, {Component, ReactNode} from 'react';

import Header from 'components/header/header';
import Sticky from 'components/sticky/sticky';

class WrapHeader extends Component {
    state = {
        isFixed: false,
    };

    isFixed = (isFixed: boolean) => {
        this.setState({isFixed});
    };

    render(): ReactNode {
        const {isFixed} = this.state;

        return (
            <Sticky isFixed={this.isFixed}>
                <Header isFixed={isFixed} />
            </Sticky>
        );
    }
}

export default WrapHeader;
