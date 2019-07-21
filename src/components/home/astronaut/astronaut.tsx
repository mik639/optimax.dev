import React from 'react'

import s from './astronaut.module.scss'

const Astronaut: React.FC = (): React.ReactElement => {
  return (
    <div className={s.wrap}>
      <div className={s.astronaut} />
    </div>
  )
}

export default Astronaut
