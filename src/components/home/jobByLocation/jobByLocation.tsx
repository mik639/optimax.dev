import React from 'react'
import classNames from 'classnames'
import { Element } from 'react-scroll'

import Title from 'components/title/title'

import s from './jobByLocation.module.scss'

const JobByLocation: React.FC = (): React.ReactElement => (
  <Element name="#location" className={s.wrap}>
    <div className={s.container}>
      <div className={s.wrapTitle}>
        <Title isWhite>Optimax Around the World</Title>
      </div>
      <div className={s.box}>
        <div className={s.item}>
          <div className={s.wrapAddress}>
            <p className={s.title}>Russia</p>
            <p className={s.address}>Tolyatti, St. 8b, Frunze</p>
          </div>
          <div className={s.wrapAddress}>
            <p className={s.title}>Israel</p>
            <p className={s.address}>Habarzei, St. 34, Tel Aviv</p>
          </div>
        </div>
        <div className={s.map}>
          <div className={classNames(s.marker, s.israel)} />
          <div className={classNames(s.marker, s.russia)} />
        </div>
      </div>
    </div>
  </Element>
)

export default JobByLocation
