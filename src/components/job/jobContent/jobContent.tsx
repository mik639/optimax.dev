import React from 'react'

import s from './jobContent.module.scss'

interface JobContentProps {
  children: string
}

const JobContent: React.SFC<JobContentProps> = ({ children }: JobContentProps): React.ReactElement => {
  return <div className={s.content} dangerouslySetInnerHTML={{ __html: children }} />
}

export default JobContent
