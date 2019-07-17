import React from 'react'

import s from './content.module.scss'

import glassesusaBottom from './img/glassesusaBottom.png'
import glassesusaRight from './img/glassesusaRight.png'
import otticaBottom from './img/otticaBottom.png'
import otticaRight from './img/otticaRight.png'
import uvpBottom from './img/uvpBottom.png'
import uvpRight from './img/uvpRight.png'

interface ContentType {
  html: string
  name: string
}

const images = {
  glassesusaBottom,
  glassesusaRight,
  otticaBottom,
  otticaRight,
  uvpBottom,
  uvpRight
}

const Content: React.SFC<ContentType> = ({ html, name }: ContentType): React.ReactElement => {
  return (
    <div>
      <div className={s.wrapContent}>
        <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
        <img className={s.img} src={images[`${name}Right`]} alt={name} />
      </div>
      <img className={s.notebook} src={images[`${name}Bottom`]} alt="" />
    </div>
  )
}

export default Content
