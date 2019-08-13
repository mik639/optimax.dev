import React, { PureComponent, ReactNode, Fragment } from 'react'
import classNames from 'classnames'

import BaseIcon from 'components/baseIcon/baseIcon'
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
              <ParallaxItem name="muse" />
              <ParallaxItem name="amelis" isSlow />
              <ParallaxItem name="gamespex" />
            </Fragment>
          )}
          <img className={s.notebook} src={images[`${name}Bottom`]} alt="" />
          {isGlassesUsa && (
            <Fragment>
              <ParallaxItem name="revel" />
              <ParallaxItem name="yoji" isSlow />
              <ParallaxItem name="ottoto" />
            </Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default Content
