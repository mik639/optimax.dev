import React from 'react'

import s from './member.module.scss'

interface MemberType {
  photo: string
  name: string
  position: string
  description: string
}

const Member: React.FC<MemberType> = ({ photo, name, position }: MemberType): React.ReactElement => (
  <div className={s.member}>
    <div className={s.image}>
      <img src={photo} alt={name} />
    </div>
    <p className={s.name}>{name}</p>
    <p className={s.position}>{position}</p>
  </div>
)

export default Member
