import React, { PureComponent, ReactNode } from 'react'
import { scroller } from 'react-scroll'
import classNames from 'classnames'
import { Link } from 'gatsby'

import BaseIcon from 'components/baseIcon/baseIcon'

import s from './menuLink.module.scss'

interface MenuLinkProps {
  name: string
  link?: string
  color: string[]
  icon?: string
  size?: 'big' | 'small'
}

class MenuLink extends PureComponent<MenuLinkProps> {
  static defaultProps = {
    link: '',
    size: 'big'
  }

  /**
   * Method is invoked immediately after a component is mounted.
   */
  componentDidMount(): void {
    this.scrollToBlock(window.location.hash)()
  }

  /**
   *  Scroll to block by name
   * @param {string} name - name block
   */
  scrollToBlock = (name: string) => (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (event) event.preventDefault()

    window.history.replaceState(null, '', `${document.location.origin}${name ? `${name}` : ''}`)
    scroller.scrollTo(name, {
      duration: 700,
      smooth: true,
      isDynamic: true,
      offset: -110
    })
  }

  /**
   * Get class as color for link
   */
  getColorClasses = (): string[] => {
    const { color } = this.props

    return color.map((className: string) => s[className])
  }

  render(): ReactNode {
    const { name, icon, link, size } = this.props

    const classes = this.getColorClasses()
    const isHash = link ? link.indexOf('#') : false
    const sizeClass = size && s[size] ? s[size] : ''

    if (isHash) {
      return (
        <Link className={classNames(s.link, ...classes, sizeClass)} to={String(link)} activeClassName={s.active} partiallyActive>
          {icon && <BaseIcon name={icon} width="24" height="24" />}
          <span className={s.name}>{name}</span>
        </Link>
      )
    }

    return (
      <a href={`/${link}`} onClick={this.scrollToBlock(String(link))} className={classNames(s.link, ...classes, sizeClass)}>
        {icon && <BaseIcon name={icon} width="24" height="24" />}
        <span className={s.name}>{name}</span>
      </a>
    )
  }
}

export default MenuLink
