import React from 'react'
import { Link } from 'gatsby'

import Tags from 'components/tags/tags'
import useBlogPosts from 'hooks/useBlog'
import { MarkdownRemarkEdge } from 'types'

import s from './sideBar.module.scss'

interface PostType {
  id: string
}

const SideBar: React.FunctionComponent<PostType> = ({ id }: PostType): React.ReactElement => {
  const posts = useBlogPosts()
  const filteredPosts = posts.filter((item: MarkdownRemarkEdge): boolean => item.node.id !== id).slice(0, 3)

  return (
    <div className={s.sideBar}>
      {filteredPosts.map((post: MarkdownRemarkEdge): React.ReactElement | null => {
        if (!post || !post.node || !post.node.frontmatter) return null

        const { path, image, title, avatar, author, shortDescription, tags } = post.node.frontmatter
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
      })}
    </div>
  )
}

export default SideBar
