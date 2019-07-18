import React from 'react'

import Title from 'components/title/title'
import Subtitle from 'components/subtitle/subtitle'
import JoinUsItem from 'components/joinUsItem/joinUsItem'
import useJobs from 'hooks/useJobs'

import { MarkdownRemarkEdge } from 'types'

import s from './joinUs.module.scss'

const JoinUs: React.FC = (): React.ReactElement => {
  const jobs = useJobs()

  return (
    <div className={s.wrap}>
      <div className={s.wrapTitles}>
        <Title>Join Us</Title>
        <Subtitle>Current openings</Subtitle>
      </div>

      <div className={s.wrapItems}>
        {jobs.map((item: MarkdownRemarkEdge): React.ReactElement | null => {
          if (!item || !item.node || !item.node.frontmatter) return null

          return <JoinUsItem key={String(item.node.frontmatter.path)} item={item.node.frontmatter} />
        })}
      </div>
    </div>
  )
}

export default JoinUs
