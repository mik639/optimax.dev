import React from 'react'

import BlogItem from 'components/blog/blogItem/blogItem'
import useBlogPosts from 'hooks/useBlog'
import { MarkdownRemarkEdge } from 'types'

import s from './blogWrapper.module.scss'

const BlogWrapper: React.FC = (): React.ReactElement => {
  const posts = useBlogPosts()

  return (
    <div className={s.wrap}>
      {posts.map((post: MarkdownRemarkEdge): React.ReactElement | null => {
        if (!post || !post.node || !post.node.frontmatter) return null

        return <BlogItem key={post.node.frontmatter.path || ''} item={post.node.frontmatter} />
      })}
    </div>
  )
}

export default BlogWrapper
