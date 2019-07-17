import { useStaticQuery, graphql } from 'gatsby'

import { SiteSiteMetadata } from 'types'

const useSiteMetadata = (): SiteSiteMetadata => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              icon
              link
            }
            contact {
              email
            }
          }
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
