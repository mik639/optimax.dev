import React, { ReactNode } from 'react'
import classNames from 'classnames'

import s from './button.module.scss'

interface ButtonProps {
  children: ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => void
  color?: 'blue' | 'white'
  type?: 'button' | 'reset' | 'submit'
  isShadow?: boolean
  className?: string
  isDisabled?: boolean
  href?: string
}

/**
 * Button which must be used at whole of the GlassesUsa
 */
const Button: React.FC<ButtonProps> = ({
  color = 'blue',
  onClick,
  children,
  isDisabled = false,
  className = '',
  type = 'button',
  isShadow = false,
  href = ''
}: ButtonProps): React.ReactElement => {
  const colorClassName: string = s[color]

  if (href) {
    return (
      <a
        className={classNames(s.btn, colorClassName, className, {
          [s.shadow]: isShadow
        })}
        onClick={onClick}
        href={href}
      >
        {children}
      </a>
    )
  }

  return (
    /**
     * https://github.com/microsoft/TypeScript/issues/31247
     */
    // eslint-disable-next-line react/button-has-type
    <button
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      className={classNames(s.btn, colorClassName, className, { [s.shadow]: isShadow })}
    >
      {children}
    </button>
  )
}
export default Button
