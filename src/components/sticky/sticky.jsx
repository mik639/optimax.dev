import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';

import s from './sticky.module.scss';

interface StickyProps {
    children: ReactNode;
}

class Sticky extends Component<StickyProps> {
    state = {
        topRect: 0,
        isFixed: false,
    };

    static defaultProps = {
        topOffset: 0,
        isFixed: () => false,
    };

    /**
     * Called after component was mounted for the first time
     */
    componentDidMount() {
        window.addEventListener('scroll', this.onSticky);
        // this.calcHeight();
    }

    /**
     * Method is invoked immediately before a component is unmounted and destroyed.
     */
    componentWillUnmount() {
        window.removeEventListener('scroll', this.onSticky);
    }

    /**
     * Calc height
     */
    calcHeight = () => {
        this.setState(
            {
                topRect: this.wrapRef.current.getBoundingClientRect().top + window.pageYOffset,
            },
            this.onSticky(),
        );
    };

    onSticky = () => {
        const winScroll = window.pageYOffset;

        const scrollFrom = this.state.topRect + this.props.topOffset;

        if (winScroll <= scrollFrom) {
            this.setState({
                isFixed: false,
            });
            this.props.isFixed(false);
        } else if (winScroll >= scrollFrom) {
            this.setState({
                isFixed: true,
            });
            this.props.isFixed(true);
        }
    };

    wrapRef = React.createRef<HTMLDivElement>();

    render(): ReactNode {
        const {children} = this.props;
        const {isFixed} = this.state;

        return (
            <div className={classNames(s.wrap, {[s.fixed]: isFixed})} ref={this.wrapRef}>
                {children}
            </div>
        );
    }
}

export default Sticky;
