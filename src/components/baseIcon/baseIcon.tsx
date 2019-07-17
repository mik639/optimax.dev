import React from 'react'

import optimax from './svg/optimax.svg'
import language from './svg/language.svg'
import glassesusa from './svg/glassesusa.svg'
import ottica from './svg/ottica.svg'
import uvp from './svg/uvp.svg'
import comfortable from './svg/comfortable.svg'
import grow from './svg/grow.svg'
import people from './svg/people.svg'
import social from './svg/social.svg'
import sport from './svg/sport.svg'
import food from './svg/food.svg'
import facebook from './svg/facebook.svg'
import linkdin from './svg/linkdin.svg'
import twitter from './svg/twitter.svg'
import instagram from './svg/instagram.svg'
import youtube from './svg/youtube.svg'
import aboutUs from './svg/aboutUs.svg'
import blog from './svg/blog.svg'
import careers from './svg/careers.svg'
import location from './svg/location.svg'
import ourTeam from './svg/ourTeam.svg'
import arrow from './svg/arrow.svg'
import marker from './svg/marker.svg'

import s from './baseIcon.module.scss'

interface IconsType {
  [s: string]: { id: string; viewBox: string }
}

const ICONS: IconsType = {
  optimax,
  language,
  glassesusa,
  ottica,
  uvp,
  comfortable,
  grow,
  people,
  social,
  sport,
  food,
  facebook,
  linkdin,
  twitter,
  instagram,
  youtube,
  aboutUs,
  location,
  blog,
  careers,
  ourTeam,
  arrow,
  marker
}

interface IconProps {
  name: string
  width?: string
  height?: string
}

const BaseIcon: React.FC<IconProps> = ({ name, width, height }: IconProps): React.ReactElement | null => {
  const icon = ICONS[name]

  if (typeof icon === 'undefined') {
    // eslint-disable-next-line no-console
    console.error('Requested icon does not exist', name)
    return null
  }

  return (
    <svg width={width} height={height} viewBox={icon.viewBox} className={s.container}>
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
}

BaseIcon.defaultProps = {
  width: '100%',
  height: '100%'
}

export default BaseIcon
