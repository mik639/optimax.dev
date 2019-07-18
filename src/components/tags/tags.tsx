import React, { Fragment } from 'react'
import classNames from 'classnames'

import s from './tags.module.scss'

interface TagsProps {
  tags?: string
  size?: 'big' | 'small'
}

const Tags: React.FunctionComponent<TagsProps> = ({ tags, size = 'small' }: TagsProps): React.ReactElement | null => {
  if (!tags || (tags && tags.length === 0)) return null

  const sizeClass = size && s[size] ? s[size] : ''
  const arrTags = tags === '' ? [] : tags.split(',')

  return (
    <Fragment>
      {arrTags.map(
        (tag: string): React.ReactElement => (
          <span className={classNames(s.tag, sizeClass)} key={tag}>
            #{tag}
          </span>
        )
      )}
    </Fragment>
  )
}

Tags.defaultProps = {
  size: 'small'
}

export default Tags
