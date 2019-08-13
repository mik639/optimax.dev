import React, { PureComponent, ReactNode, Fragment } from 'react'

import ParallaxItem from 'components/projects/parallaxItem/parallaxItem'

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

interface ImagesType {
  [s: string]: string
}

const images: ImagesType = {
  glassesusaBottom,
  glassesusaRight,
  otticaBottom,
  otticaRight,
  uvpBottom,
  uvpRight
}

class Content extends PureComponent<ContentType> {
  render(): ReactNode {
    const { html, name } = this.props
    const isGlassesUsa = name === 'glassesusa'

    return (
      <div>
        <div className={s.wrapContent}>
          <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />
          <img className={s.img} src={images[`${name}Right`]} alt={name} />
        </div>

        <div className={s.wrapParallax}>
          {isGlassesUsa && (
            <Fragment>
              <ParallaxItem name="muse" speed={0.27} />
              <ParallaxItem name="amelis" speed={0.45} />
              <ParallaxItem name="gamespex" speed={0.6} />
            </Fragment>
          )}
          <img className={s.notebook} src={images[`${name}Bottom`]} alt="" />
          {isGlassesUsa && (
            <Fragment>
              <ParallaxItem name="revel" speed={0.27} />
              <ParallaxItem name="yoji" speed={0.45} />
              <ParallaxItem name="ottoto" speed={0.6} />
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default Content
