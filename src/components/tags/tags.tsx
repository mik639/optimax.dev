import React, { ReactNode } from 'react'
import classNames from 'classnames'

import s from './tags.module.scss'

interface TagsProps {
  tags: string[]
  size: 'big' | 'small'
}

const Tags: React.FunctionComponent<TagsProps> = ({ tags, size }: TagsProps): React.ReactElement =>
  tags.split(',').map(
    (tag: string): ReactNode => (
      <span className={classNames(s.tag, s[size])} key={tag}>
        #{tag}
      </span>
    )
  )

Tags.defaultProps = {
  size: 'small'
}

export default Tags
