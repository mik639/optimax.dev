import React from 'react'
import Helmet from 'react-helmet'

import favicon from 'static/favicon.png'
import useSiteMetadata from 'hooks/useSiteMetaData'

interface SEOProps {
  title?: string
  lang?: string
  meta?: string[]
  keywords?: string[]
}

// const SEO: React.SFC<SEOProps> = (props: SEOProps): React.ReactElement => {
const SEO: React.SFC<SEOProps> = ({ title }: SEOProps): React.ReactElement | null => {
  const siteMetadata = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en'
      }}
      title={title || String(siteMetadata.title)}
      titleTemplate={`%s - ${siteMetadata.title}`}
      link={[{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }]}
    />
  )
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: []
}

export default SEO
