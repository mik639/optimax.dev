import React, { ReactNode } from 'react'

import glassesusa from './img/glassesusaD.jpg'
import ottica from './img/otticaD.jpg'
import uvp from './img/uvpD.jpg'
import job from './img/job.jpg'

import s from './background.module.scss'

interface BackgroundProps {
  name: string
  children: ReactNode
  img: string
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

const Background: React.FC<BackgroundProps> = ({ name, children, img }: BackgroundProps): React.ReactElement | null => {
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
          <img className={s.img} src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Background
