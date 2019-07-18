import React, { ReactNode } from 'react'
import className from 'classnames'

import s from './subtitle.module.scss'

interface SubtitleProps {
  children: ReactNode
  isWhite?: boolean
}

const Subtitle: React.FC<SubtitleProps> = ({ children, isWhite }: SubtitleProps): React.ReactElement => (
  <h2 className={className(s.subtitle, { [s.white]: isWhite })}>{children}</h2>
)

Subtitle.defaultProps = {
  isWhite: false
}

export default Subtitle
