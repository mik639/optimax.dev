import React, { ReactNode } from 'react'

import BlogItem from 'components/blog/blogItem/blogItem'
import useBlogPosts from 'hooks/useBlog'
import { MarkdownRemarkEdge } from 'types'

import s from './blogWrapper.module.scss'

const BlogWrapper: React.SFC = (): React.ReactElement => {
  const posts = useBlogPosts()

  return (
    <div className={s.wrap}>
      {posts.map(
        (post: MarkdownRemarkEdge): ReactNode => (
          <BlogItem key={post.node.frontmatter.path} item={post.node.frontmatter} />
        )
      )}
    </div>
  )
}

export default BlogWrapper
