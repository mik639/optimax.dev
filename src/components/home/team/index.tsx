import React from 'react'
import { Element } from 'react-scroll'

import Title from 'components/title/title'
import Subtitle from 'components/subtitle/subtitle'
import Member from 'components/home/team/member/member'

import nehozin from './img/nehozin.png'
import belonovich from './img/belonovich.jpg'
import gusarov from './img/gusarov.jpg'
import nikolaevskiy from './img/nikolaevskiy.jpg'
import kruhmaleva from './img/kruhmaleva.jpg'
import sustretov from './img/sustretov.jpg'
import kolesnik from './img/kolesnik.jpg'
import melnikov from './img/melnikov.jpg'
import smirnov from './img/smirnov.jpg'
import meling from './img/meling.jpg'
import kirsanov from './img/kirsanov.png'
import shilnikov from './img/shilnikov.jpg'
import ulianov from './img/ulianov.jpg'

import s from './index.module.scss'

interface TeamType {
  photo: string
  name: string
  position: string
  description: string
}

const TEAMS: TeamType[] = [
  {
    photo: nehozin,
    name: 'Ilya Nekhozhin',
    position: 'SRE Teamlead',
    description: 'Max workplace comfort, high-end monitors for convenience'
  },
  {
    photo: belonovich,
    name: 'Anton Belonovich',
    position: 'GlassesUSA Teamlead',
    description: 'Plenty of corporate & team building events'
  },
  {
    photo: gusarov,
    name: 'Eugeny Gusarov',
    position: 'Release manager',
    description: 'Freshly brewed coffee, tea, juice, drinks, breakfast, lunch'
  },
  {
    photo: nikolaevskiy,
    name: 'Mikhail Nikolaevskiy',
    position: 'D.E.H.T.A. teamlead',
    description: 'English training, frequent practical use'
  },
  {
    photo: kruhmaleva,
    name: 'Ekaterina Krukhmaleva',
    position: 'HR',
    description: 'Outdoors & indoors company sports days & activities'
  },
  {
    photo: sustretov,
    name: 'Alexander Sustretov',
    position: 'Growth teamlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: kolesnik,
    name: 'Kirill Kolesnik',
    position: 'QA manager/PO',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: melnikov,
    name: 'Ivan Melnikov',
    position: 'UVP teamlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: smirnov,
    name: 'Vladislav Smirnov',
    position: 'Rebels teamlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: meling,
    name: 'Vadim Meling',
    position: 'Backend techlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: kirsanov,
    name: 'Eugene Kirsanov',
    position: 'Analytics teamlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: shilnikov,
    name: 'Denis Shilnikov',
    position: 'Backend teamlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  },
  {
    photo: ulianov,
    name: 'Aleksei Ulianov',
    position: 'Frontend techlead',
    description: 'Fun, dynamic work enviornment with people like you :)'
  }
]

const Team: React.FC = (): React.ReactElement => (
  <Element name="#ourTeam" className={s.wrap}>
    <div className={s.container}>
      <div className={s.titles}>
        <Title isWhite>Jobs by Team</Title>
        <Subtitle isWhite>The people behind our company</Subtitle>
      </div>
      <div className={s.teams}>
        {TEAMS.map(
          (team: TeamType): JSX.Element => (
            <Member key={team.name} {...team} />
          )
        )}
      </div>
    </div>
  </Element>
)

export default Team
