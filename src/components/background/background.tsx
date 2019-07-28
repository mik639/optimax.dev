import React, { ReactNode } from 'react'

import glassesusa from './img/glassesusaD.jpg'
import ottica from './img/otticaD.jpg'
import uvp from './img/uvpD.jpg'
import job from './img/job.jpg'

import s from './background.module.scss'

interface BackgroundProps {
  name: string
  children?: ReactNode
  isOverlay?: boolean
  img?: string | null
}

interface ImagesType {
  [s: string]: string
}

const IMAGES_MAP: ImagesType = {
  glassesusa,
  ottica,
  uvp,
  job
}

const Background: React.FC<BackgroundProps> = ({ name, children, img, isOverlay }: BackgroundProps): React.ReactElement | null => {
  const image = img || IMAGES_MAP[name]

  if (typeof image === 'undefined') {
    // eslint-disable-next-line no-console
    console.error('Requested icon does not exist', name)
    return null
  }

  return (
    <div className={s.wrap}>
      <div className={s.inner}>
        {children && <div className={s.content}>{children}</div>}
        <div className={s.wrapImg}>
          {isOverlay && <div className={s.overlay} />}
          <img className={s.img} src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

Background.defaultProps = {
  isOverlay: false
}

export default Background
