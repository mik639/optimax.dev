import React, { ReactNode } from 'react'

import s from './member.module.scss'

const Member = ({ photo, name, position }: { photo: string; name: string; position: string }): ReactNode => (
  <div className={s.member}>
    <div className={s.image}>
      <img src={photo} />
    </div>
    <p className={s.name}>{name}</p>
    <p className={s.position}>{position}</p>
  </div>
)

export default Member
