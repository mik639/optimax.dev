import React, { PureComponent, ReactNode } from 'react'
import classNames from 'classnames'

import BaseIcon from 'components/baseIcon/baseIcon'

import s from './parallaxItem.module.scss'

interface ParallaxItemProps {
  name: string
  speed: number
}

class ParallaxItem extends PureComponent<ParallaxItemProps> {
  state = {
    top: 0
  }

  static defaultProps = {
    isSlow: false
  }

  /**
   * Called after component was mounted for the first time
   */
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    const { speed } = this.props
    const scrollTop = window.pageYOffset

    const top = 0 - scrollTop * speed

    this.setState({ top })
  }

  render(): ReactNode {
    const { name } = this.props
    const { top } = this.state

    return (
      <div className={classNames(s.icon, s[name])} style={{ transform: `translate3d(0px, ${top}px, 0px)` }}>
        <BaseIcon name={name} width="134" height="134" />
      </div>
    )
  }
}

export default ParallaxItem
