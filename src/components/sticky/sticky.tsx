import React, { Component, ReactNode } from 'react'
import classNames from 'classnames'

import s from './sticky.module.scss'

interface StickyProps {
  children: ReactNode
  isFixed: (arg0: boolean) => boolean
  topOffset: number
}

class Sticky extends Component<StickyProps> {
  state = {
    topRect: 0,
    isFixed: false
  }

  static defaultProps = {
    topOffset: 0,
    isFixed: () => false
  }

  private wrapRef = React.createRef<HTMLDivElement>()

  /**
   * Called after component was mounted for the first time
   */
  componentDidMount() {
    window.addEventListener('scroll', this.onSticky)
    // this.calcHeight();
  }

  /**
   * Method is invoked immediately before a component is unmounted and destroyed.
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.onSticky)
  }

  /**
   * Calc height
   */
  calcHeight = () => {
    const element = this.wrapRef.current
    this.setState(
      {
        topRect: element ? element.getBoundingClientRect().top + window.pageYOffset : 0
      },
      this.onSticky
    )
  }

  onSticky = () => {
    const { topRect } = this.state
    const { topOffset, isFixed } = this.props

    const winScroll = window.pageYOffset

    const scrollFrom = topRect + topOffset

    if (winScroll <= scrollFrom) {
      this.setState({
        isFixed: false
      })
      isFixed(false)
    } else if (winScroll >= scrollFrom) {
      this.setState({
        isFixed: true
      })
      isFixed(true)
    }
  }

  render(): ReactNode {
    const { children } = this.props
    const { isFixed } = this.state

    return (
      <div className={classNames(s.wrap, { [s.fixed]: isFixed })} ref={this.wrapRef}>
        {children}
      </div>
    )
  }
}

export default Sticky
