import React from 'react'

import bg from './img/artboard.svg'
import s from './astronaut.module.scss'

const Astronaut: React.FC = (): React.ReactElement => {
  console.log(bg)
  return <div className={s.wrap} />
}

export default Astronaut
