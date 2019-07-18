import React, { ReactNode } from 'react'
import className from 'classnames'

import s from './title.module.scss'

interface TitleProps {
  children: ReactNode
  isWhite?: boolean
}

const Title: React.FC<TitleProps> = ({ children, isWhite }: TitleProps): React.ReactElement => (
  <h2 className={className(s.title, { [s.white]: isWhite })}>{children}</h2>
)

Title.defaultProps = {
  isWhite: false
}

export default Title
