import React from 'react'
import classNames from 'classnames'

import useSiteMetadata from 'hooks/useSiteMetaData'
import MenuLink from 'components/menuLink/menuLink'
import Button from 'components/button/button'

import { Maybe, SiteSiteMetadataMenuLinks } from 'types'

import s from './menu.module.scss'

interface MenuProps {
  isOpen?: boolean
  isFixed?: boolean
}

const Menu: React.FC<MenuProps> = ({ isOpen, isFixed }: MenuProps): React.ReactElement => {
  const { menuLinks, contact } = useSiteMetadata()

  const colors = isFixed ? ['black'] : ['white', 'black']

  return (
    <div className={classNames(s.wrap, { [s.open]: isOpen }, { [s.fixed]: isFixed })}>
      <nav className={s.list}>
        {menuLinks &&
          menuLinks.map((item: Maybe<SiteSiteMetadataMenuLinks>): React.ReactElement | null => {
            if (!item || !item.name) return null
            if (item.link) {
              return <MenuLink key={item.name} color={colors} name={item.name} icon={String(item.icon)} link={item.link} />
            }
            return <MenuLink key={item.name} color={colors} name={item.name} icon={String(item.icon)} />
          })}
        <Button className={s.btn} size="big" href={`mailto:${contact ? contact.email : ''}`}>
          <span className={s.btnText}>Apply</span>
        </Button>
      </nav>
    </div>
  )
}

Menu.defaultProps = {
  isFixed: false,
  isOpen: false
}

export default Menu
