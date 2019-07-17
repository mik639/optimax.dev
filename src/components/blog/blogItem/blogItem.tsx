import React from 'react'
import { Link } from 'gatsby'

import Tags from 'components/tags/tags'
import { MarkdownRemarkFrontmatter } from 'types'

import s from './blogItem.module.scss'

interface BlogItemProps {
  item: MarkdownRemarkFrontmatter
}

const BlogItem: React.FC<BlogItemProps> = ({ item }: BlogItemProps): React.ReactElement | null => {
  if (!item) return null

  const { path, title, image, author, tags, avatar, shortDescription } = item

  return (
    <Link to={path || ''} className={s.wrap}>
      <div className={s.wrapImg}>{image && <img className={s.img} src={image} alt={title || ''} />}</div>
      <span className={s.title}>{title}</span>
      <div className={s.wrapAuthor}>
        {avatar && <img className={s.avatar} src={avatar} alt="" />}
        <span className={s.author}>{author}</span>
      </div>
      <p className={s.text}>{shortDescription}</p>
      <Tags tags={tags || ''} />
    </Link>
  )
}

export default BlogItem
