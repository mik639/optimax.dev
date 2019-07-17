import React, { ReactNode } from 'react'

import s from './align.module.scss'

interface AlignPropsType {
  children: ReactNode
}

const Align: React.FC<AlignPropsType> = ({ children }: AlignPropsType): React.ReactElement => {
  return <div className={s.wrap}>{children}</div>
}

export default Align
