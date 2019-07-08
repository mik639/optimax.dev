import React, {ReactNode, Component} from 'react';
import {Link} from 'gatsby';
import classNames from 'classnames';

import s from './button.module.scss';

interface ButtonProps {
    children: ReactNode;
    onClick: (event: SyntheticMouseEvent<HTMLButtonElement>) => void;
    color?: 'blue' | 'white';
    type?: 'button' | 'submit' | 'reset';
    isShadow?: boolean;
    className?: string;
    isDisabled?: boolean;
    href?: string;
}

/**
 * Button which must be used at whole of the GlassesUsa
 */
class Button extends Component<ButtonProps> {
    static defaultProps = {
        color: 'blue',
        type: 'button',
        className: '',
        isDisabled: false,
        isShadow: false,
        href: '',
    };

    /**
     * Render component
     * @return {ReactNode} - rendered component
     */
    render(): ReactNode {
        const {
            color,
            onClick,
            children,
            isDisabled,
            className,
            type,
            isShadow,
            href,
            ...restProps
        } = this.props;
        const colorClassName = s[color];

        if (href) {
            return (
                <Link
                    className={classNames(s.btn, colorClassName, className, {
                        [s.shadow]: isShadow,
                    })}
                    onClick={onClick}
                    to={href}
                    {...restProps}
                >
                    {children}
                </Link>
            );
        }

        return (
            <button
                disabled={isDisabled}
                onClick={onClick}
                type={type}
                className={classNames(s.btn, colorClassName, className, {[s.shadow]: isShadow})}
                {...restProps}
            >
                {children}
            </button>
        );
    }
}

export default Button;