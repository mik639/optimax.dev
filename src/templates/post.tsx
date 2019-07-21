import React from 'react'
import { graphql } from 'gatsby'

import SEO from 'components/SEO/SEO'
import Layout from 'layouts/index'
import WrapHeader from 'components/wrapHeader/wrapHeader'
import Background from 'components/background/background'
import Title from 'components/title/title'
import Tags from 'components/tags/tags'
import Author from 'components/blog/author/author'
import SideBar from 'components/blog/sideBar/sideBar'

import { MarkdownRemark } from 'types'

import s from './post.module.scss'

interface PostType {
  data: {
    markdownRemark: MarkdownRemark
  }
}

const Post: React.FunctionComponent<PostType> = ({ data }: PostType): React.ReactElement => {
  const { html, id, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter ? String(frontmatter.title) : ''} />
      <WrapHeader />
      <Background name="job" img={frontmatter ? frontmatter.image : null}>
        <Title isWhite>
          <div className={s.wrapTitle}>{frontmatter ? String(frontmatter.title) : ''}</div>
          <div className={s.wrapTags}>
            <Tags tags={frontmatter ? String(frontmatter.tags) : ''} size="big" />
          </div>
        </Title>
        {frontmatter && frontmatter.avatar && frontmatter.author && <Author avatar={frontmatter.avatar} author={frontmatter.author} />}
      </Background>
      <div className={s.body}>
        {html && <div className={s.content} dangerouslySetInnerHTML={{ __html: html }} />}
        <SideBar id={id} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        path
        image
        author
        avatar
        shortDescription
        tags
      }
      html
    }
  }
`

export default Post
