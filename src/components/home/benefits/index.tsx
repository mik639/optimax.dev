import React, { ReactNode } from 'react'

import Title from 'components/title/title'
import Subtitle from 'components/subtitle/subtitle'
import Perk from 'components/home/benefits/perk/perk'
import Button from 'components/button/button'
import useSiteMetadata from 'hooks/useSiteMetaData'

import s from './index.module.scss'

interface PerkType {
  name: string
  title: string
  description: string
}

const PERKS: PerkType[] = [
  {
    name: 'comfortable',
    title: 'Get Comfortable',
    description: 'Max workplace comfort, high-end monitors for convenience'
  },
  {
    name: 'social',
    title: 'Social Activities',
    description: 'Plenty of corporate & team building events'
  },
  {
    name: 'food',
    title: 'Food & Drinks',
    description: 'Freshly brewed coffee, tea, juice, drinks, breakfast, lunch'
  },
  {
    name: 'grow',
    title: 'Learning & Grow',
    description: 'English training, frequent practical use'
  },
  {
    name: 'sport',
    title: 'Sports Activities',
    description: 'Outdoors & indoors company sports days & activities'
  },
  {
    name: 'people',
    title: 'Awesome people',
    description: 'Fun, dynamic work enviornment with people like you :)'
  }
]

const Benefits: React.SFC = (): React.ReactElement => {
  const { contact } = useSiteMetadata()
  return (
    <div className={s.wrap}>
      <div className={s.titles}>
        <Title>Benefits & Perks</Title>
        <Subtitle>Discover more reasons to join our team:</Subtitle>
      </div>
      <div className={s.perks}>
        {PERKS.map(
          (perk: PerkType): ReactNode => (
            <Perk key={perk.name} {...perk} />
          )
        )}
      </div>
      <Button className={s.btn} isShadow href={`mailto:${contact.email}`}>
        <span className={s.btnText}>Apply now</span>
      </Button>
    </div>
  )
}

export default Benefits
