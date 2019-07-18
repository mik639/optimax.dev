import React from 'react'

import BaseIcon from 'components/baseIcon/baseIcon'

import s from './perk.module.scss'

interface PerkProps {
  name: string
  title: string
  description: string
}

const Perk: React.FC<PerkProps> = ({ name, title, description }: PerkProps): React.ReactElement => (
  <div className={s.perk}>
    <div className={s.icon}>
      <BaseIcon width="40" height="63" name={name} />
    </div>
    <h3 className={s.title}>{title}</h3>
    <h4 className={s.description}>{description}</h4>
  </div>
)

export default Perk
