import React from 'react'

import BaseIcon from 'components/baseIcon/baseIcon'

import s from './logoProject.module.scss'

interface LogoProjectType {
  name: 'glassesusa' | 'ottica' | 'uvp'
  link: string
}

const LogoProject: React.SFC<LogoProjectType> = ({ link, name }: LogoProjectType): React.ReactElement => (
  <div className={s.wrap}>
    <div className={s.wrapLogo}>
      <BaseIcon name={name} />
    </div>
    <a className={s.link} href={link} title={name}>
      View Website &gt;
    </a>
  </div>
)

export default LogoProject
