import React from 'react'

import Button from 'components/button/button'
import useSiteMetadata from 'hooks/useSiteMetaData'

import s from './jobApply.module.scss'

interface JobApplyType {
  link: string | null | undefined
}

const JobApply: React.FC<JobApplyType> = ({ link }: JobApplyType): React.ReactElement => {
  const { contact } = useSiteMetadata()

  const href = link || `mailto:${contact ? contact.email : ''}`

  return (
    <Button className={s.btn} size="big" href={href}>
      <span className={s.btnText}>Apply For This Job</span>
    </Button>
  )
}

export default JobApply
