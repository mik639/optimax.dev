import React from 'react'
import classNames from 'classnames'

import s from './tags.module.scss'

interface TagsProps {
  tags?: string
  size?: 'big' | 'small'
}

const Tags: React.FunctionComponent<TagsProps> = ({ tags, size }: TagsProps): React.ReactElement | null => {
  if (!tags || (tags && tags.length === 0)) return null

  return tags.split(',').map((tag: string) => (
    <span className={classNames(s.tag, s[size])} key={tag}>
      #{tag}
    </span>
  ))
}

Tags.defaultProps = {
  size: 'small'
}

export default Tags
