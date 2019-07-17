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
    this.scrollToBlock(location.hash)()
  }

  /**
   *  Scroll to block by name
   * @param {string} name - name block
   */
  scrollToBlock = (name: string): (() => void) => (): void => {
    scroller.scrollTo(name, {
      duration: 700,
      smooth: true,
      isDynamic: true,
      offset: -110
    })
  }

  getColorClasses = (): string[] => this.props.color.map((className: string): string[] => s[className])

  render(): ReactNode {
    const { name, icon, link, size } = this.props

    const classes = this.getColorClasses()
    const isHash = link.indexOf('#')

    if (isHash) {
      return (
        <Link className={classNames(s.link, ...classes, s[size])} to={link} activeClassName={s.active} partiallyActive>
          {icon && <BaseIcon name={icon} width={24} height={24} />}
          <span className={s.name}>{name}</span>
        </Link>
      )
    }

    return (
      <a href={`/${link}`} onClick={this.scrollToBlock(link)} className={classNames(s.link, ...classes, s[size])}>
        {icon && <BaseIcon name={icon} width={24} height={24} />}
        <span className={s.name}>{name}</span>
      </a>
    )
  }
}

export default MenuLink
