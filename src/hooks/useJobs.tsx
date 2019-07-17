import { useStaticQuery, graphql } from 'gatsby'

import { MarkdownRemarkEdge } from 'types'

const useJobs = (): MarkdownRemarkEdge[] => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query JobsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }, sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              excerpt
              id
              frontmatter {
                title
                address
                date
                path
              }
            }
          }
        }
      }
    `
  )
  return allMarkdownRemark.edges
}

export default useJobs
