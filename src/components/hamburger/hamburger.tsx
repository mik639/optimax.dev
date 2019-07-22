import React, { Component, ReactNode } from 'react'
import classNames from 'classnames'

import Menu from 'components/menu/menu'

import s from './hamburger.module.scss'

interface HamburgerStateType {
  isOpen: boolean
}

interface HamburgerPropsType {
  isBlack: boolean
}

class Hamburger extends Component<HamburgerPropsType, HamburgerStateType> {
  state = {
    isOpen: false
  }

  /**
   * Called after component was mounted
   */
  componentDidMount() {
    window.addEventListener('scroll', this.closeMenu)
  }

  /**
   * Called before component will unmounted
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.closeMenu)
  }

  /**
   * Close menu when user scrolling
   */
  closeMenu = () => {
    const { isOpen } = this.state
    const widthWindow = window.innerWidth || 0
    const mediaPoint = 1024

    if (widthWindow !== 0 && widthWindow < mediaPoint && isOpen) {
      this.setState({ isOpen: false })
    }
  }

  /**
   * Change visability menu
   */
  changeVisibilityMenu = () => {
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }))
  }

  render(): ReactNode {
    const { isOpen } = this.state
    const { isBlack } = this.props

    return (
      <div className={classNames(s.wrap, { [s.white]: !isBlack }, { [s.black]: isBlack })}>
        <div
          role="button"
          tabIndex={0}
          className={classNames(s.wrapHamburger, { [s.open]: isOpen })}
          onClick={this.changeVisibilityMenu}
          onKeyDown={this.changeVisibilityMenu}
        >
          <div className={s.inner} />
        </div>
        <Menu isOpen={isOpen} />
        {isOpen && <div className={s.overlay} />}
      </div>
    )
  }
}

export default Hamburger
