import React from 'react'

import Button from 'components/button/button'
import useSiteMetadata from 'hooks/useSiteMetaData'

import s from './jobApply.module.scss'

const JobApply: React.FC = (): React.ReactElement => {
  const { contact } = useSiteMetadata()
  return (
    <Button className={s.btn} size="big" href={`mailto:${contact ? contact.email : ''}`}>
      <span className={s.btnText}>Apply For This Job</span>
    </Button>
  )
}

export default JobApply
