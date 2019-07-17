import React, { Component, ReactNode } from 'react'
import className from 'classnames'

import s from './subtitle.module.scss'

interface TitleProps {
  children: ReactNode
  isWhite: boolean
}

class Subtitle extends Component<TitleProps> {
  render(): ReactNode {
    const { isWhite, children } = this.props
    return <h3 className={className(s.subtitle, { [s.white]: isWhite })}>{children}</h3>
  }
}

export default Subtitle
